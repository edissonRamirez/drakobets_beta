// src/rag/image/reingest.js
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { MongoClient, GridFSBucket } = require("mongodb");

// --- MODELOS XENOVA ---
let captioner = null;
let embedder = null;

async function loadModels() {
    const { pipeline } = await import("@xenova/transformers");

    console.log("📌 Cargando modelo de captioning...");
    captioner = await pipeline(
        "image-to-text",
        "Xenova/vit-gpt2-image-captioning"
    );

    console.log("📌 Cargando modelo MiniLM 384D...");
    embedder = await pipeline(
        "feature-extraction",
        "Xenova/all-MiniLM-L6-v2"
    );
}

async function embed(text) {
    const output = await embedder(text, {
        pooling: "mean",
        normalize: true,
    });
    return Array.from(output.data); // 384 dimensiones
}

// -----------------------------------------------------

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME || "Proyecto";
const IMG_DIR = "data/images";

async function run() {
    await loadModels();

    const client = new MongoClient(MONGO_URI);
    await client.connect();
    const db = client.db(DB_NAME);

    const media = db.collection("media");
    const bucket = new GridFSBucket(db, { bucketName: "media_files" });

    console.log("🗑 Borrando documentos antiguos en 'media'...");
    await media.deleteMany({});

    console.log("📂 Buscando imágenes en", IMG_DIR);
    const files = fs.readdirSync(IMG_DIR);

    for (const filename of files) {
        if (!filename.match(/\.(jpg|jpeg|png)$/i)) continue;

        console.log("📤 Procesando:", filename);
        const filepath = path.join(IMG_DIR, filename);

        // 1. Caption automático
        const captionRes = await captioner(filepath);
        const caption = captionRes[0].generated_text;

        console.log("📝 Caption generado:", caption);

        // 2. Embedding del caption
        const embedding = await embed(caption);
        console.log("🧠 Dimensiones del embedding:", embedding.length);

        // 3. Subir imagen a GridFS
        const uploadStream = bucket.openUploadStream(filename);
        fs.createReadStream(filepath).pipe(uploadStream);

        const file_id = await new Promise((resolve) =>
            uploadStream.on("finish", () => resolve(uploadStream.id))
        );

        // 4. Guardar en Mongo
        await media.insertOne({
            title: filename,
            caption,
            image_file_id: file_id,
            embedding,
            created_at: new Date(),
        });

        console.log("✅ Imagen guardada:", filename);
    }

    console.log("\n🎉 INGESTA COMPLETADA CON ÉXITO\n");
    process.exit(0);
}

run().catch((err) => console.error(err));

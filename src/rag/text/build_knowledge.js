const { connectDB } = require("../../config/db");
const { ingestText } = require("./ingester");

async function buildKnowledgeBase() {
  const db = await connectDB();

  // Colecciones importantes
  const collections = [
    "usuarios",
    "transacciones",
    "apuestas",
    "apuestaCasino",
    "competencias",
    "eventos"
  ];

  for (const name of collections) {
    console.log(`📚 Extrayendo datos de ${name}...`);

    const docs = await db.collection(name).find().limit(200).toArray();

    for (const doc of docs) {
      const texto = JSON.stringify(doc, null, 2);
      await ingestText(db, texto, { entity: name });
    }
  }

  console.log("✨ BASE DE CONOCIMIENTO RAG GENERADA EXITOSAMENTE");
}

buildKnowledgeBase();

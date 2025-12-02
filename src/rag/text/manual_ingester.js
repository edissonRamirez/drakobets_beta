const fs = require("fs");
const path = require("path");
const { connectDB, closeDB } = require("../../config/db");
const { ingestText } = require("./ingester");

(async () => {
  try {
    const db = await connectDB();

    // 1. Leer archivo con el contexto
    const manualPath = path.join(__dirname, "context", "drakobets_manual.txt");
    const rawText = fs.readFileSync(manualPath, "utf8");

    console.log("🚀 Iniciando ingesta del manual de Drakobets...");
    
    // 2. Ingestar
    await ingestText(db, rawText, { source: "manual_drakobets" });

    console.log("✅ Ingesta completada y almacenada en vector_chunks_text");

    await closeDB();
    process.exit(0);
  } catch (err) {
    console.error("❌ Error en la ingesta:", err);
    process.exit(1);
  }
})();

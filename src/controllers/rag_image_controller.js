const { ragImage } = require("../rag/image/rag_image");
const { connectDB } = require("../config/db");

async function askRagImage(req, res) {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Missing question" });
    }

    const db = await connectDB();
    const result = await ragImage(db, question);

    return res.json(result);
  } catch (err) {
    console.error("❌ Error en RAG de imagen:", err);
    res.status(500).json({ error: "Error interno" });
  }
}

module.exports = { askRagImage };

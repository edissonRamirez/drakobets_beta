const { connectDB } = require("../config/db");
const { ragText } = require("../rag/text/rag_text");
const { ragImage } = require("../rag/image/rag_image");
const { ragHybrid } = require("../rag/hybrid/rag_hybrid");
const { askLLM } = require("../rag/llm/groq");

// ✔ Endpoint TEXTUAL original
async function askRAG(req, res) {
  try {
    const { question } = req.body;
    const db = await connectDB();

    const { context, results } = await ragText(db, question);
    const answer = await askLLM(context, question);

    res.json({ mode: "text", question, answer, context, results });
  } catch (err) {
    res.status(500).json({ error: "Text RAG error" });
  }
}

// ✔ Alias para que el endpoint /rag/text lo use
async function askRAGText(req, res) {
  return askRAG(req, res);
}

// ✔ RAG SOLO IMÁGENES
async function askRAGImage(req, res) {
  try {
    const { query } = req.body;
    const db = await connectDB();

    const { context, results } = await ragImage(db, query);
    const answer = await askLLM(context, query);

    res.json({ mode: "image", query, answer, context, results });
  } catch (err) {
    res.status(500).json({ error: "Image RAG error" });
  }
}

// ✔ RAG HÍBRIDO
async function askRAGHybrid(req, res) {
  try {
    const { question } = req.body;
    const db = await connectDB();

    const { context, results } = await ragHybrid(db, question);
    const answer = await askLLM(context, question);

    res.json({ mode: "hybrid", question, answer, context, results });
  } catch (err) {
    res.status(500).json({ error: "Hybrid RAG error" });
  }
}

module.exports = { askRAG, askRAGText, askRAGImage, askRAGHybrid };

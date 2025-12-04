const { connectDB } = require("../config/db");
const { ragText } = require("../rag/text/rag_text");
const { ragImage } = require("../rag/image/rag_image");
const { askLLM } = require("../rag/llm/groq");

// ---------------------------------------------
// CONTROLADOR PRINCIPAL GENÉRICO
// ---------------------------------------------
exports.askRAG = async (req, res) => {
  try {
    const { mode = "text", question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Falta el campo 'question'" });
    }

    const db = await connectDB();

    let ragResult;

    if (mode === "image") {
      ragResult = await ragImage(db, question);
    } else {
      ragResult = await ragText(db, question);
    }

    const answer = await askLLM(ragResult.context, question);

    res.json({
      mode,
      question,
      context: ragResult.context,
      results: ragResult.results,
      answer
    });
  } catch (err) {
    console.error("❌ Error en askRAG:", err);
    res.status(500).json({ error: err.toString() });
  }
};

// ---------------------------------------------
// ENDPOINT SOLO TEXTO
// ---------------------------------------------
exports.askRAGText = async (req, res) => {
  try {
    const { question } = req.body;
    const db = await connectDB();

    const ragResult = await ragText(db, question);
    const answer = await askLLM(ragResult.context, question);

    res.json({
      mode: "text",
      question,
      context: ragResult.context,
      results: ragResult.results,
      answer
    });
  } catch (err) {
    console.error("❌ Error en askRAGText:", err);
    res.status(500).json({ error: err.toString() });
  }
};

// ---------------------------------------------
// ENDPOINT SOLO IMÁGENES
// ---------------------------------------------
exports.askRAGImage = async (req, res) => {
  try {
    const { question } = req.body;
    const db = await connectDB();

    const ragResult = await ragImage(db, question);
    const answer = await askLLM(ragResult.context, question);

    res.json({
      mode: "image",
      question,
      context: ragResult.context,
      results: ragResult.results,
      answer
    });
  } catch (err) {
    console.error("❌ Error en askRAGImage:", err);
    res.status(500).json({ error: err.toString() });
  }
};

// ---------------------------------------------
// ENDPOINT HÍBRIDO (texto + imagen)
// ---------------------------------------------
exports.askRAGHybrid = async (req, res) => {
  try {
    const { question } = req.body;
    const db = await connectDB();

    const textRes = await ragText(db, question);
    const imgRes  = await ragImage(db, question);

    const context =
      textRes.context +
      "\n\n" +
      imgRes.context;

    const answer = await askLLM(context, question);

    res.json({
      mode: "hybrid",
      question,
      context,
      textResults: textRes.results,
      imageResults: imgRes.results,
      answer
    });
  } catch (err) {
    console.error("❌ Error en askRAGHybrid:", err);
    res.status(500).json({ error: err.toString() });
  }
};

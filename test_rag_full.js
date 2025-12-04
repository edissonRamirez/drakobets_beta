const { connectDB } = require("./src/config/db");
const { ragText } = require("./src/rag/text/rag_text");
const { askLLM } = require("./src/rag/llm/groq");

(async () => {
  try {
    // 1) Conexión a MongoDB
    const db = await connectDB();

    // 2) Pregunta del usuario — puedes cambiarla
    const pregunta = "Dame el nombre de cualquier usuario";

    console.log("\n🔍 Ejecutando RAG para la pregunta:");
    console.log("   →", pregunta);

    // 3) Recuperación vectorial (Retrieve)
    const { context, results } = await ragText(db, pregunta);

    console.log("\n📚 Chunks recuperados por similarity:");
    
    if (!results || results.length === 0) {
        console.log("⚠️ No se recuperaron chunks relevantes.");
        console.log("Revisemos qué devolvió ragText:");
        console.log({ context, results });
        process.exit(0);
    }
    results.forEach((r, i) => {
      console.log(`\n[${i+1}] score=${r.score}`);
      console.log(r.chunk);
    });

    // 4) Generar respuesta con LLM usando SOLO el contexto recuperado
    console.log("\n🧠 Enviando contexto al LLM...");

    const respuesta = await askLLM(context, pregunta);

    console.log("\n💬 RESPUESTA FINAL DEL LLM:");
    console.log("--------------------------------------------------");
    console.log(respuesta);
    console.log("--------------------------------------------------\n");

    process.exit(0);
  } catch (err) {
    console.error("❌ Error ejecutando RAG:", err);
    process.exit(1);
  }
})();

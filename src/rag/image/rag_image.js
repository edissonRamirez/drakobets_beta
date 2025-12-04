// src/rag/image/rag_image.js
const { embedImageText } = require("./embedder_text"); 
const { searchImages } = require("./search_image");
const { askLLM } = require("../llm/groq");

async function ragImage(db, question) {
    const queryEmb = await embedImageText(question);

    const results = await searchImages(db, queryEmb);

    if (results.length === 0) {
        return { answer: "No encontré imágenes relevantes.", results: [] };
    }

    const context = results
        .map((img) => `Imagen ${img.title}: ${img.caption}`)
        .join("\n");

    const answer = await askLLM(context, question);

    return { answer, results };
}

module.exports = { ragImage };

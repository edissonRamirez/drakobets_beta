const { chunkText } = require("./chunker");
const { embedText } = require("./embedder");

async function ingestText(db, text, metadata = {}) {
  const col = db.collection("vector_chunks_text");

  const chunks = chunkText(text);

  for (const chunk of chunks) {
    const embedding = await embedText(chunk);

    await col.insertOne({
      chunk,
      embedding,
      metadata,
      created_at: new Date()
    });
  }

  return true;
}

module.exports = { ingestText };

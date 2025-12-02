const { embedText } = require("./embedder");
const { searchText } = require("./search");

async function ragText(db, question) {
  const qEmbedding = await embedText(question);
  const results = await searchText(db, qEmbedding);

  const context = results.map(r => r.chunk).join("\n");

  return { question, context, results };
}

module.exports = { ragText };

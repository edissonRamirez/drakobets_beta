const { embedText } = require("./embedder");   // CLIP text encoder
const { searchImages } = require("./search");  // vectorSearch image

async function ragImage(db, query) {
  const qVector = await embedText(query);   // CLIP text → vector

  const results = await searchImages(db, qVector, 5);

  const context = results
    .map(r => `IMG: ${r.title}, tags=${r.tags}, caption=${r.caption}`)
    .join("\n");

  return { context, results };
}

module.exports = { ragImage };

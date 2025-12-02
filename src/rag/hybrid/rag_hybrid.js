const { ragText } = require("../text/rag_text");
const { ragImage } = require("../image/rag_image");

async function ragHybrid(db, query) {
  const textPart = await ragText(db, query);
  const imagePart = await ragImage(db, query);

  const context = `
[CHUNKS TEXTO]
${textPart.context}

[IMÁGENES]
${imagePart.context}
`;

  const results = [...textPart.results, ...imagePart.results];

  return { context, results };
}

module.exports = { ragHybrid };

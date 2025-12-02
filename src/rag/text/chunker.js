function chunkText(text, maxSentences = 3, overlap = 1) {
  const sentences = text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/);

  const chunks = [];
  let i = 0;

  while (i < sentences.length) {
    const chunk = sentences.slice(i, i + maxSentences).join(" ");
    chunks.push(chunk);
    i += maxSentences - overlap;
  }

  return chunks;
}

module.exports = { chunkText };

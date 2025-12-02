async function searchText(db, queryEmbedding, k = 5) {
  return db.collection("vector_chunks_text").aggregate([
    {
      $vectorSearch: {
        index: "text_vectors_index",
        path: "embedding",
        queryVector: queryEmbedding,
        numCandidates: 200,
        limit: k
      }
    },
    { $addFields: { score: { $meta: "vectorSearchScore" } } }
  ]).toArray();
}

module.exports = { searchText };

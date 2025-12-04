// src/rag/image/search_image.js
async function searchImages(db, queryEmbedding, k = 5) {
    return db.collection("media").aggregate([
        {
            $vectorSearch: {
                index: "media_embedding_index",
                path: "embedding",
                queryVector: queryEmbedding,
                numCandidates: 200,
                limit: k
            }
        },
        {
            $addFields: { score: { $meta: "vectorSearchScore" } }
        }
    ]).toArray();
}

module.exports = { searchImages };

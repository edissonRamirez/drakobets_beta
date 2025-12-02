async function searchImage(db, vector, k = 5, filters = {}) {
  const pipeline = [
    {
      $vectorSearch: {
        index: "vector_image_idx",
        path: "image_embedding",
        queryVector: vector,
        numCandidates: 200,
        limit: k
      }
    },
    { $addFields: { score: { $meta: "vectorSearchScore" } } }
  ];async function searchImages(db, vector, limit = 5, filters = {}) {
  const pipeline = [
    {
      $vectorSearch: {
        index: "vector_image_idx",
        path: "image_embedding",
        queryVector: vector,
        numCandidates: 200,
        limit
      }
    },
    { $addFields: { score: { $meta: "vectorSearchScore" } } }
  ];

  if (filters.category)
    pipeline.push({ $match: { category: filters.category } });

  if (filters.tags)
    pipeline.push({ $match: { tags: { $in: filters.tags } } });

  return db.collection("media_images").aggregate(pipeline).toArray();
}

module.exports = { searchImages };


  if (filters.category) pipeline.push({ $match: { category: filters.category } });
  if (filters.tags) pipeline.push({ $match: { tags: { $in: filters.tags } } });

  return db.collection("media_images").aggregate(pipeline).toArray();
}

module.exports = { searchImage };

def search_images(db, query_embedding, k=3):
    """
    Realiza búsqueda vectorial en la colección 'media'.
    Requiere un índice Atlas Search tipo vector llamado 'image_vector_index'.
    """
    pipeline = [
        {
            "$vectorSearch": {
                "index": "image_vector_index",
                "path": "image_embedding",
                "queryVector": query_embedding,
                "numCandidates": 200,
                "limit": k,
                "similarity": "cosine"
            }
        },
        {
            "$addFields": {
                "score": { "$meta": "vectorSearchScore" }
            }
        },
        {
            "$project": {
                "title": 1,
                "category": 1,
                "tags": 1,
                "caption": 1,
                "score": 1,
                "image_file_id": 1
            }
        }
    ]

    return list(db["media"].aggregate(pipeline))

import os
from dotenv import load_dotenv
from pymongo import MongoClient

from src.rag.image.embed_text_clip import embed_text_clip
from src.rag.image.search_image import search_images

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")

client = MongoClient(MONGO_URI)
db = client[DB_NAME]

query = "ropa deportiva para clima frío"
print("Consulta:", query)

# 1. Embedding del texto
query_emb = embed_text_clip([query])[0].tolist()

# 2. Vector Search
results = search_images(db, query_emb, k=3)

print("\nRESULTADOS:")
for r in results:
    print("\n----------------------------------")
    print("Título:", r.get("title"))
    print("Categoría:", r.get("category"))
    print("Tags:", r.get("tags"))
    print("Score:", r.get("score"))

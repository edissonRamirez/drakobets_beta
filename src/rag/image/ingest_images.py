import os
from dotenv import load_dotenv
load_dotenv()  # <-- carga tu archivo .env automáticamente

import gridfs
from pymongo import MongoClient
from datetime import datetime
from embedder_image import embed_image

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME", "Proyecto")

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
fs = gridfs.GridFS(db)

IMG_DIR = os.path.join("data", "images")

def ingest_all_images():
    for filename in os.listdir(IMG_DIR):
        if not filename.lower().endswith((".jpg", ".jpeg", ".png")):
            continue
        
        path = os.path.join(IMG_DIR, filename)
        emb = embed_image(path)

        with open(path, "rb") as f:
            file_id = fs.put(f.read(), filename=filename)

        db.media.insert_one({
            "title": filename,
            "category": "dataset",
            "tags": ["demo"],
            "image_file_id": file_id,
            "image_embedding": emb,
            "created_at": datetime.utcnow()
        })

        print("✔ Ingestada:", filename)

if __name__ == "__main__":
    ingest_all_images()

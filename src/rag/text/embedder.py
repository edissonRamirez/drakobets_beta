from sentence_transformers import SentenceTransformer
import json, sys

model = SentenceTransformer("all-MiniLM-L6-v2")

text = sys.argv[1]
emb = model.encode(text).tolist()

print(json.dumps(emb))

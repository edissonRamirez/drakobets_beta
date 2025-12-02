from transformers import CLIPModel, CLIPProcessor
from PIL import Image
import json, sys
import torch

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
proc  = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

path = sys.argv[1]
img = Image.open(path).convert("RGB")

inputs = proc(images=[img], return_tensors="pt")
with torch.no_grad():
    emb = model.get_image_features(**inputs)

emb = emb / emb.norm(dim=-1, keepdim=True)
print(json.dumps(emb[0].tolist()))

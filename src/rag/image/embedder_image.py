import torch
from transformers import CLIPProcessor, CLIPModel
from PIL import Image
import numpy as np

device = "cuda" if torch.cuda.is_available() else "cpu"

model_name = "openai/clip-vit-base-patch32"
clip_model = CLIPModel.from_pretrained(model_name).to(device)
clip_processor = CLIPProcessor.from_pretrained(model_name)


def embed_image(path):
    img = Image.open(path).convert("RGB")
    inputs = clip_processor(images=img, return_tensors="pt")
    pixel_values = inputs["pixel_values"].to(device)
    with torch.no_grad():
        emb = clip_model.get_image_features(pixel_values=pixel_values)
    emb = emb / emb.norm(dim=-1, keepdim=True)
    return emb.cpu().numpy().astype("float32").flatten().tolist()


def embed_text(text):
    inputs = clip_processor(text=text, return_tensors="pt", padding=True)
    with torch.no_grad():
        emb = clip_model.get_text_features(
            input_ids=inputs["input_ids"].to(device),
            attention_mask=inputs["attention_mask"].to(device)
        )
    emb = emb / emb.norm(dim=-1, keepdim=True)
    return emb.cpu().numpy().astype("float32").flatten().tolist()

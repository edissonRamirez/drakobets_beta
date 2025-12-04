from transformers import CLIPProcessor, CLIPModel
from PIL import Image
import torch
import numpy as np

device = "cuda" if torch.cuda.is_available() else "cpu"

model_name = "openai/clip-vit-base-patch32"
clip_model = CLIPModel.from_pretrained(model_name).to(device)
clip_processor = CLIPProcessor.from_pretrained(model_name)

def embed_image_clip(pil_images):
    """
    Recibe lista de PIL Images, devuelve embeddings (N, 512)
    """
    inputs = clip_processor(images=pil_images, return_tensors="pt")
    pixel_values = inputs["pixel_values"].to(device)

    with torch.no_grad():
        emb = clip_model.get_image_features(pixel_values)

    emb = emb / emb.norm(dim=-1, keepdim=True)

    return emb.cpu().numpy().astype("float32")

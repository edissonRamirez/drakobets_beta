from transformers import CLIPProcessor, CLIPModel
import torch
import numpy as np

# Selección de dispositivo
device = "cuda" if torch.cuda.is_available() else "cpu"

# Modelo CLIP
model_name = "openai/clip-vit-base-patch32"
clip_model = CLIPModel.from_pretrained(model_name).to(device)
clip_processor = CLIPProcessor.from_pretrained(model_name)

def embed_text_clip(texts):
    """
    Convierte una lista de strings en embeddings CLIP normalizados.
    Retorna: np.array (N, 512)
    """
    inputs = clip_processor(text=texts, return_tensors="pt", padding=True, truncation=True)
    input_ids = inputs["input_ids"].to(device)
    attention_mask = inputs["attention_mask"].to(device)

    with torch.no_grad():
        emb = clip_model.get_text_features(
            input_ids=input_ids,
            attention_mask=attention_mask
        )

    # Normalización L2
    emb = emb / emb.norm(dim=-1, keepdim=True)

    return emb.cpu().numpy().astype("float32")

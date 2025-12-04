let extractor = null;

async function loadModel() {
    if (!extractor) {
        const { pipeline } = await import("@xenova/transformers");
        extractor = await pipeline(
            "feature-extraction",
            "Xenova/clip-vit-base-patch32"  // ← produce 512 dimensiones
        );
    }
    return extractor;
}

async function embedImageText(text) {
    const model = await loadModel();
    const output = await model(text, {
        pooling: "mean",
        normalize: true,
    });

    return Array.from(output.data); // 512 dims
}

module.exports = { embedImageText };

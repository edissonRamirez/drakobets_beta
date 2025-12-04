require("./config/env"); // Cargar variables de entorno
const express = require("express");
const cors = require("cors");
const ragRoutes = require("./routes/rag_routes");
const logger = require("./utils/logger");
const { embedImageText } = require("../src/rag/image/embedder_image.js");

const app = express();
app.use(express.json());
app.use(cors());

(async () => {
    const emb = await embedImageText("escudos de equipos de futbol");
    console.log("DIMENSIONES DEL EMBEDDING:", emb.length);
})();

// Rutas del RAG
app.use("/rag", ragRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.success(`🚀 Servidor RAG corriendo en http://localhost:${PORT}`);
});

require("./config/env"); // Cargar variables de entorno
const express = require("express");
const cors = require("cors");
const ragRoutes = require("./routes/rag_routes");
const logger = require("./utils/logger");

const app = express();
app.use(express.json());
app.use(cors());

// Rutas del RAG
app.use("/rag", ragRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.success(`🚀 Servidor RAG corriendo en http://localhost:${PORT}`);
});

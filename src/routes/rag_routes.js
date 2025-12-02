const express = require("express");
const router = express.Router();

const {
  askRAG,        // tu endpoint actual
  askRAGText,    // alias
  askRAGImage,
  askRAGHybrid
} = require("../controllers/rag_controller");

// Tu endpoint original:
router.post("/ask", askRAG);

// Endpoints formales:
router.post("/text", askRAGText);
router.post("/image", askRAGImage);
router.post("/hybrid", askRAGHybrid);

module.exports = router;

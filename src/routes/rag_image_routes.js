const express = require("express");
const router = express.Router();
const { ragImage } = require("../rag/image/rag_image");
const { connectDB } = require("../config/db");

router.post("/", async (req, res) => {
  try {
    const { query, filters } = req.body;
    const db = await connectDB();
    const response = await ragImage(db, query, filters);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { ragHybrid } = require("../rag/hybrid/rag_hybrid");
const { connectDB } = require("../config/db");

router.post("/", async (req, res) => {
  try {
    const { query, filters } = req.body;
    const db = await connectDB();
    const response = await ragHybrid(db, query, filters);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router;

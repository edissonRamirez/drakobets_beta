const express = require("express");
const router = express.Router();
const { ragText } = require("../rag/text/rag_text");
const { connectDB } = require("../config/db");

router.post("/", async (req, res) => {
  try {
    const { question } = req.body;
    const db = await connectDB();
    const response = await ragText(db, question);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router;

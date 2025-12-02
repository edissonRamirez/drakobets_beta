const path = require("path");
const { runPython } = require("../utils/python_runner");

async function embedText(text) {
  const script = path.join(__dirname, "embedder.py");
  return await runPython(script, [text]);
}

module.exports = { embedText };

const path = require("path");
const { runPython } = require("../utils/python_runner");

async function embedImage(pathImg) {
  const script = path.join(__dirname, "embed_clip.py");
  return await runPython(script, [pathImg]);
}

module.exports = { embedImage };

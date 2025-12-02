const { embedText } = require("./embedder.js");

(async () => {
  const vector = await embedText("Recomiéndame un lugar turístico en Colombia");
  console.log(JSON.stringify(vector));
})();

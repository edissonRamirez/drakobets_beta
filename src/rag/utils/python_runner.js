const { spawn } = require("child_process");

function runPython(script, args = []) {
  return new Promise((resolve, reject) => {
    const py = spawn("python", [script, ...args]);

    let output = "";
    let error = "";

    py.stdout.on("data", (d) => (output += d));
    py.stderr.on("data", (e) => (error += e));

    py.on("close", () => {
      if (error) reject(error);
      else resolve(JSON.parse(output));
    });
  });
}

module.exports = { runPython };

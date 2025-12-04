const Groq = require("groq-sdk");
require("dotenv").config();

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function askLLM(context, question) {
  const prompt = `
  [CONTEXT]
  ${context}

  [QUESTION]
  ${question}

  Responde SOLO usando el contexto.
  Si falta información, dilo explícitamente.
  `;

  const response = await client.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2,
  });

  return response.choices[0].message.content;
}

module.exports = { askLLM };

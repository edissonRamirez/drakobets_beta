const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});

async function askLLM(context, question) {
  const prompt = `
  [CONTEXT]
  ${context}

  [QUESTION]
  ${question}

  Responde SOLO usando el contexto. Si no hay suficiente información, dilo.
  `;

  const res = await client.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2
  });

  return res.choices[0].message.content;
}

module.exports = { askLLM };

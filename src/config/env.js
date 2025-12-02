require("dotenv").config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  DB_NAME: process.env.DB_NAME || "drakobets",
  GROQ_API_KEY: process.env.GROQ_API_KEY
};

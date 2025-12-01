const { MongoClient } = require("mongodb");
const { MONGO_URI, DB_NAME } = require("./env");

let client = null;
let db = null;

async function connectDB() {
  if (db) return db;

  if (!client) {
    client = new MongoClient(MONGO_URI, {
      maxPoolSize: 10,
      minPoolSize: 1,
      serverSelectionTimeoutMS: 8000
    });
  }

  // Para MongoDB driver v6:
  const topologyState = client.topology?.s?.state;

  if (!topologyState || topologyState === "closed") {
    await client.connect();
  }

  db = client.db(DB_NAME);
  return db;
}

async function closeDB() {
  const topologyState = client?.topology?.s?.state;
  if (topologyState && topologyState !== "closed") {
    await client.close();
  }
}

module.exports = { connectDB, closeDB };

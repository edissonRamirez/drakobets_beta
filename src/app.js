const { connectDB, closeDB } = require("./config/db");
const seedDatabase = require("./data");
const createAllIndexes = require("./indexes");
const logger = require("./utils/logger");

(async function init() {
  try {
    const db = await connectDB();
    logger.success("Conectado a MongoDB");

    // Reset opcional
    if (process.argv.includes("--reset")) {
      logger.warn("Reset activado. Limpiando base de datos...");
      const collections = await db.listCollections().toArray();
      for (const c of collections) {
        await db.collection(c.name).deleteMany({});
      }
      logger.success("Limpieza completa.");
    }

    logger.info("Ejecutando SEEDERS...");
    await seedDatabase(db);

    logger.info("Creando ÍNDICES...");
    await createAllIndexes(db);

    logger.success("Inicialización COMPLETA.");
  } catch (err) {
    logger.error("❌ Error en inicialización:");
    console.error(err);
  } finally {
    await closeDB();
  }
})();

const { connectDB } = require("../../config/db");
const { ingestText } = require("../../rag/text/ingester");

(async () => {
  try {
    const db = await connectDB();

    // Puedes reemplazar este texto por el que quieras.
    const texto = `
    Villa de Leyva es un pueblo ubicado en el departamento de Boyacá.
    Es famoso por su plaza central, una de las más grandes de América Latina.
    Sus calles empedradas y arquitectura colonial lo convierten en un destino turístico popular.
    La región ofrece museos, senderos ecológicos y festivales culturales durante todo el año.
    Muchos viajeros lo eligen por su tranquilidad y belleza histórica.
    `;

    await ingestText(db, texto, {
      source: "ingest_prueba",
      idioma: "es",
      fecha: new Date()
    });

    console.log("✓ Ingesta de texto completada.");
    process.exit(0);
  } catch (e) {
    console.error("❌ Error en la ingesta:", e);
    process.exit(1);
  }
})();

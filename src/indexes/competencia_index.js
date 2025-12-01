module.exports = async function competenciaIndex(db) {
  const col = db.collection("competencia");
  await col.createIndex({ nombrecompetencia: "text", descripcion: "text" });
  await col.createIndex({ "deporte.nombredeporte": 1, fechainicio: -1 });
};

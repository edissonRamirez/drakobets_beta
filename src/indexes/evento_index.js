module.exports = async function eventoIndex(db) {
  const col = db.collection("evento");

  await col.createIndex({ fecha: 1, estado: 1 });
  await col.createIndex({ descripcion: "text" });
  await col.createIndex({ "deporte.nombredeporte": 1 });
  await col.createIndex({ idcompetencia: 1 });
};

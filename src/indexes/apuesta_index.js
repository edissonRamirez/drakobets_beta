module.exports = async function apuestaIndex(db) {
  const col = db.collection("apuesta");
  await col.createIndex({ cedulausuario: 1, fechahora: -1 });
  await col.createIndex({ cedulausuario: 1, estado: 1 });
};

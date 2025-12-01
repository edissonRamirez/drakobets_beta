module.exports = async function apuestaCasinoIndex(db) {
  const col = db.collection("apuestCasino");
  await col.createIndex({ cedulausuario: 1, fechahora: -1 });
  await col.createIndex({ idjuego: 1 });
};

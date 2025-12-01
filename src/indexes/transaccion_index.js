module.exports = async function transaccionIndex(db) {
  const col = db.collection("transaccion");
  await col.createIndex({ cedulausuario: 1, fechahoratransaccion: -1 });
};

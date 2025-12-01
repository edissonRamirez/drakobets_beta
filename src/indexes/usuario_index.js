module.exports = async function usuarioIndex(db) {
  const col = db.collection("usuario");
  await col.createIndex({ cedulausuario: 1 }, { unique: true });
  await col.createIndex({ correo: 1 }, { unique: true });
};

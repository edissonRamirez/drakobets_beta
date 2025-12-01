module.exports = async function transaccionesSeed(db, usuarios) {
  const col = db.collection("transaccion");

  if (await col.estimatedDocumentCount()) 
  return await col.find().toArray();

  const transacciones = [
    {
      cedulausuario: usuarios[0].cedulausuario,
      usuario_oid: usuarios[0]._id,
      monto: 50000,
      tipotransaccion: "deposito",
      fechahoratransaccion: new Date(),
      informacionbancaria: "Visa **** 1234"
    }
  ];

  await col.insertMany(transacciones);
  return transacciones;
};

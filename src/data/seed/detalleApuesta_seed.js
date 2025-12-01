module.exports = async function detalleApuestaSeed(db, apuestas, eventos, tiposApuesta) {
  const col = db.collection("detalleApuesta");

  if (await col.estimatedDocumentCount()) 
  return await col.find().toArray();

  const detalles = [
    {
      idapuesta: apuestas[0]._id,
      idevento: eventos[0]._id,
      idtipoapuesta: tiposApuesta[0]._id,
      montogana: 30000,
      resultadoapuesta: "pendiente",
      fechahoraapuesta: new Date()
    }
  ];

  await col.insertMany(detalles);
  return detalles;
};

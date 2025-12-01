const { ObjectId } = require("mongodb");

module.exports = async function apuestasSeed(db, usuarios, premios) {
  const col = db.collection("apuesta");

  if (await col.estimatedDocumentCount()) 
  return await col.find().toArray();

  const apuestas = [
    {
      _id: new ObjectId(),
      cedulausuario: usuarios[0].cedulausuario,
      idpremio: premios[0]._id,
      montoapostado: 20000,
      fechahora: new Date()
    }
  ];

  await col.insertMany(apuestas);
  return apuestas;
};

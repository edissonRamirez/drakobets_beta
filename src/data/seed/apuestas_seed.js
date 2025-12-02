const { ObjectId } = require("mongodb");

module.exports = async function apuestasSeed(db, usuarios, premios) {
  const col = db.collection("apuesta");

  if (await col.estimatedDocumentCount()) 
  return await col.find().toArray();

  const apuestas = [
    { _id: new ObjectId(), cedulausuario: usuarios[0].cedulausuario, idpremio: premios[0]._id, montoapostado: 20000, fechahora: new Date() },
    { _id: new ObjectId(), cedulausuario: usuarios[1].cedulausuario, idpremio: premios[1]._id, montoapostado: 25000, fechahora: new Date(Date.now() - 3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[2].cedulausuario, idpremio: premios[2]._id, montoapostado: 30000, fechahora: new Date(Date.now() - 2*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[3].cedulausuario, idpremio: premios[3]._id, montoapostado: 15000, fechahora: new Date(Date.now() - 3*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[4].cedulausuario, idpremio: premios[4]._id, montoapostado: 40000, fechahora: new Date(Date.now() - 4*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[5].cedulausuario, idpremio: premios[5]._id, montoapostado: 22000, fechahora: new Date(Date.now() - 5*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[6].cedulausuario, idpremio: premios[6]._id, montoapostado: 35000, fechahora: new Date(Date.now() - 6*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[7].cedulausuario, idpremio: premios[7]._id, montoapostado: 18000, fechahora: new Date(Date.now() - 7*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[8].cedulausuario, idpremio: premios[8]._id, montoapostado: 28000, fechahora: new Date(Date.now() - 8*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[9].cedulausuario, idpremio: premios[9]._id, montoapostado: 32000, fechahora: new Date(Date.now() - 9*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[10].cedulausuario, idpremio: premios[10]._id, montoapostado: 45000, fechahora: new Date(Date.now() - 10*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[11].cedulausuario, idpremio: premios[11]._id, montoapostado: 21000, fechahora: new Date(Date.now() - 11*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[12].cedulausuario, idpremio: premios[12]._id, montoapostado: 26000, fechahora: new Date(Date.now() - 12*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[13].cedulausuario, idpremio: premios[13]._id, montoapostado: 33000, fechahora: new Date(Date.now() - 13*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[14].cedulausuario, idpremio: premios[14]._id, montoapostado: 19000, fechahora: new Date(Date.now() - 14*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[15].cedulausuario, idpremio: premios[15]._id, montoapostado: 38000, fechahora: new Date(Date.now() - 15*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[16].cedulausuario, idpremio: premios[16]._id, montoapostado: 24000, fechahora: new Date(Date.now() - 16*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[17].cedulausuario, idpremio: premios[17]._id, montoapostado: 41000, fechahora: new Date(Date.now() - 17*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[18].cedulausuario, idpremio: premios[18]._id, montoapostado: 27000, fechahora: new Date(Date.now() - 18*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[19].cedulausuario, idpremio: premios[19]._id, montoapostado: 36000, fechahora: new Date(Date.now() - 19*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[20].cedulausuario, idpremio: premios[20]._id, montoapostado: 23000, fechahora: new Date(Date.now() - 20*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[21].cedulausuario, idpremio: premios[21]._id, montoapostado: 43000, fechahora: new Date(Date.now() - 21*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[22].cedulausuario, idpremio: premios[22]._id, montoapostado: 29000, fechahora: new Date(Date.now() - 22*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[23].cedulausuario, idpremio: premios[23]._id, montoapostado: 37000, fechahora: new Date(Date.now() - 23*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[24].cedulausuario, idpremio: premios[24]._id, montoapostado: 31000, fechahora: new Date(Date.now() - 24*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[25].cedulausuario, idpremio: premios[25]._id, montoapostado: 48000, fechahora: new Date(Date.now() - 25*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[26].cedulausuario, idpremio: premios[26]._id, montoapostado: 20000, fechahora: new Date(Date.now() - 26*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[27].cedulausuario, idpremio: premios[27]._id, montoapostado: 39000, fechahora: new Date(Date.now() - 27*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[28].cedulausuario, idpremio: premios[28]._id, montoapostado: 34000, fechahora: new Date(Date.now() - 28*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[29].cedulausuario, idpremio: premios[29]._id, montoapostado: 42000, fechahora: new Date(Date.now() - 29*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[30].cedulausuario, idpremio: premios[0]._id, montoapostado: 25000, fechahora: new Date(Date.now() - 30*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[31].cedulausuario, idpremio: premios[1]._id, montoapostado: 44000, fechahora: new Date(Date.now() - 31*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[32].cedulausuario, idpremio: premios[2]._id, montoapostado: 30000, fechahora: new Date(Date.now() - 32*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[33].cedulausuario, idpremio: premios[3]._id, montoapostado: 21000, fechahora: new Date(Date.now() - 33*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[34].cedulausuario, idpremio: premios[4]._id, montoapostado: 46000, fechahora: new Date(Date.now() - 34*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[35].cedulausuario, idpremio: premios[5]._id, montoapostado: 22000, fechahora: new Date(Date.now() - 35*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[36].cedulausuario, idpremio: premios[6]._id, montoapostado: 40000, fechahora: new Date(Date.now() - 36*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[37].cedulausuario, idpremio: premios[7]._id, montoapostado: 35000, fechahora: new Date(Date.now() - 37*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[38].cedulausuario, idpremio: premios[8]._id, montoapostado: 50000, fechahora: new Date(Date.now() - 38*3600000) },
    { _id: new ObjectId(), cedulausuario: usuarios[39].cedulausuario, idpremio: premios[9]._id, montoapostado: 32000, fechahora: new Date(Date.now() - 39*3600000) }
  ];

  await col.insertMany(apuestas);
  return apuestas;
};

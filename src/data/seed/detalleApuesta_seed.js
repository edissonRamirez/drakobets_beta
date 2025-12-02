module.exports = async function detalleApuestaSeed(db, apuestas, eventos, tiposApuesta) {
  const col = db.collection("detalleApuesta");

  if (await col.estimatedDocumentCount()) 
  return await col.find().toArray();

  const detalles = [
    { idapuesta: apuestas[0]._id, idevento: eventos[0]._id, idtipoapuesta: tiposApuesta[0]._id, montogana: 30000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date() },
    { idapuesta: apuestas[0]._id, idevento: eventos[1]._id, idtipoapuesta: tiposApuesta[1]._id, montogana: 45000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 3600000) },
    { idapuesta: apuestas[1]._id, idevento: eventos[2]._id, idtipoapuesta: tiposApuesta[2]._id, montogana: 25000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 2*3600000) },
    { idapuesta: apuestas[1]._id, idevento: eventos[3]._id, idtipoapuesta: tiposApuesta[3]._id, montogana: 50000, resultadoapuesta: "perdido", fechahoraapuesta: new Date(Date.now() - 3*3600000) },
    { idapuesta: apuestas[2]._id, idevento: eventos[4]._id, idtipoapuesta: tiposApuesta[4]._id, montogana: 35000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 4*3600000) },
    { idapuesta: apuestas[2]._id, idevento: eventos[5]._id, idtipoapuesta: tiposApuesta[5]._id, montogana: 40000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 5*3600000) },
    { idapuesta: apuestas[3]._id, idevento: eventos[6]._id, idtipoapuesta: tiposApuesta[0]._id, montogana: 22000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 6*3600000) },
    { idapuesta: apuestas[3]._id, idevento: eventos[7]._id, idtipoapuesta: tiposApuesta[1]._id, montogana: 55000, resultadoapuesta: "perdido", fechahoraapuesta: new Date(Date.now() - 7*3600000) },
    { idapuesta: apuestas[4]._id, idevento: eventos[8]._id, idtipoapuesta: tiposApuesta[2]._id, montogana: 28000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 8*3600000) },
    { idapuesta: apuestas[4]._id, idevento: eventos[9]._id, idtipoapuesta: tiposApuesta[3]._id, montogana: 38000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 9*3600000) },
    { idapuesta: apuestas[5]._id, idevento: eventos[10]._id, idtipoapuesta: tiposApuesta[4]._id, montogana: 32000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 10*3600000) },
    { idapuesta: apuestas[5]._id, idevento: eventos[11]._id, idtipoapuesta: tiposApuesta[5]._id, montogana: 48000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 11*3600000) },
    { idapuesta: apuestas[6]._id, idevento: eventos[12]._id, idtipoapuesta: tiposApuesta[0]._id, montogana: 26000, resultadoapuesta: "perdido", fechahoraapuesta: new Date(Date.now() - 12*3600000) },
    { idapuesta: apuestas[6]._id, idevento: eventos[13]._id, idtipoapuesta: tiposApuesta[1]._id, montogana: 42000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 13*3600000) },
    { idapuesta: apuestas[7]._id, idevento: eventos[14]._id, idtipoapuesta: tiposApuesta[2]._id, montogana: 31000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 14*3600000) },
    { idapuesta: apuestas[7]._id, idevento: eventos[15]._id, idtipoapuesta: tiposApuesta[3]._id, montogana: 52000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 15*3600000) },
    { idapuesta: apuestas[8]._id, idevento: eventos[16]._id, idtipoapuesta: tiposApuesta[4]._id, montogana: 29000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 16*3600000) },
    { idapuesta: apuestas[8]._id, idevento: eventos[17]._id, idtipoapuesta: tiposApuesta[5]._id, montogana: 37000, resultadoapuesta: "perdido", fechahoraapuesta: new Date(Date.now() - 17*3600000) },
    { idapuesta: apuestas[9]._id, idevento: eventos[18]._id, idtipoapuesta: tiposApuesta[0]._id, montogana: 44000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 18*3600000) },
    { idapuesta: apuestas[9]._id, idevento: eventos[19]._id, idtipoapuesta: tiposApuesta[1]._id, montogana: 33000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 19*3600000) },
    { idapuesta: apuestas[10]._id, idevento: eventos[20]._id, idtipoapuesta: tiposApuesta[2]._id, montogana: 27000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 20*3600000) },
    { idapuesta: apuestas[10]._id, idevento: eventos[21]._id, idtipoapuesta: tiposApuesta[3]._id, montogana: 46000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 21*3600000) },
    { idapuesta: apuestas[11]._id, idevento: eventos[22]._id, idtipoapuesta: tiposApuesta[4]._id, montogana: 36000, resultadoapuesta: "perdido", fechahoraapuesta: new Date(Date.now() - 22*3600000) },
    { idapuesta: apuestas[11]._id, idevento: eventos[23]._id, idtipoapuesta: tiposApuesta[5]._id, montogana: 41000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 23*3600000) },
    { idapuesta: apuestas[12]._id, idevento: eventos[24]._id, idtipoapuesta: tiposApuesta[0]._id, montogana: 24000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 24*3600000) },
    { idapuesta: apuestas[12]._id, idevento: eventos[25]._id, idtipoapuesta: tiposApuesta[1]._id, montogana: 51000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 25*3600000) },
    { idapuesta: apuestas[13]._id, idevento: eventos[26]._id, idtipoapuesta: tiposApuesta[2]._id, montogana: 39000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 26*3600000) },
    { idapuesta: apuestas[13]._id, idevento: eventos[27]._id, idtipoapuesta: tiposApuesta[3]._id, montogana: 34000, resultadoapuesta: "perdido", fechahoraapuesta: new Date(Date.now() - 27*3600000) },
    { idapuesta: apuestas[14]._id, idevento: eventos[28]._id, idtipoapuesta: tiposApuesta[4]._id, montogana: 47000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 28*3600000) },
    { idapuesta: apuestas[14]._id, idevento: eventos[29]._id, idtipoapuesta: tiposApuesta[5]._id, montogana: 23000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 29*3600000) },
    { idapuesta: apuestas[15]._id, idevento: eventos[30]._id, idtipoapuesta: tiposApuesta[0]._id, montogana: 43000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 30*3600000) },
    { idapuesta: apuestas[15]._id, idevento: eventos[31]._id, idtipoapuesta: tiposApuesta[1]._id, montogana: 49000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 31*3600000) },
    { idapuesta: apuestas[16]._id, idevento: eventos[32]._id, idtipoapuesta: tiposApuesta[2]._id, montogana: 21000, resultadoapuesta: "perdido", fechahoraapuesta: new Date(Date.now() - 32*3600000) },
    { idapuesta: apuestas[16]._id, idevento: eventos[33]._id, idtipoapuesta: tiposApuesta[3]._id, montogana: 54000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 33*3600000) },
    { idapuesta: apuestas[17]._id, idevento: eventos[34]._id, idtipoapuesta: tiposApuesta[4]._id, montogana: 30000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 34*3600000) },
    { idapuesta: apuestas[17]._id, idevento: eventos[35]._id, idtipoapuesta: tiposApuesta[5]._id, montogana: 53000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 35*3600000) },
    { idapuesta: apuestas[18]._id, idevento: eventos[36]._id, idtipoapuesta: tiposApuesta[0]._id, montogana: 20000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 36*3600000) },
    { idapuesta: apuestas[18]._id, idevento: eventos[37]._id, idtipoapuesta: tiposApuesta[1]._id, montogana: 56000, resultadoapuesta: "perdido", fechahoraapuesta: new Date(Date.now() - 37*3600000) },
    { idapuesta: apuestas[19]._id, idevento: eventos[38]._id, idtipoapuesta: tiposApuesta[2]._id, montogana: 32000, resultadoapuesta: "ganado", fechahoraapuesta: new Date(Date.now() - 38*3600000) },
    { idapuesta: apuestas[19]._id, idevento: eventos[39]._id, idtipoapuesta: tiposApuesta[3]._id, montogana: 57000, resultadoapuesta: "pendiente", fechahoraapuesta: new Date(Date.now() - 39*3600000) }
  ];

  await col.insertMany(detalles);
  return detalles;
};

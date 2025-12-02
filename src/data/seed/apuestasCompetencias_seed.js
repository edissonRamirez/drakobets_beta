module.exports = async function apuestasCompetenciasSeed(db, apuestas, competencias) {
  const col = db.collection("apuestasCompetencias");

  if (await col.estimatedDocumentCount()) 
  return await col.find().toArray();

  const apComp = [
    { idapuesta: apuestas[0]._id, idCompetencias: competencias[0]._id },
    { idapuesta: apuestas[1]._id, idCompetencias: competencias[1]._id },
    { idapuesta: apuestas[2]._id, idCompetencias: competencias[2]._id },
    { idapuesta: apuestas[3]._id, idCompetencias: competencias[3]._id },
    { idapuesta: apuestas[4]._id, idCompetencias: competencias[4]._id },
    { idapuesta: apuestas[5]._id, idCompetencias: competencias[5]._id },
    { idapuesta: apuestas[6]._id, idCompetencias: competencias[6]._id },
    { idapuesta: apuestas[7]._id, idCompetencias: competencias[7]._id },
    { idapuesta: apuestas[8]._id, idCompetencias: competencias[8]._id },
    { idapuesta: apuestas[9]._id, idCompetencias: competencias[9]._id },
    { idapuesta: apuestas[10]._id, idCompetencias: competencias[10]._id },
    { idapuesta: apuestas[11]._id, idCompetencias: competencias[11]._id },
    { idapuesta: apuestas[12]._id, idCompetencias: competencias[12]._id },
    { idapuesta: apuestas[13]._id, idCompetencias: competencias[13]._id },
    { idapuesta: apuestas[14]._id, idCompetencias: competencias[14]._id },
    { idapuesta: apuestas[15]._id, idCompetencias: competencias[15]._id },
    { idapuesta: apuestas[16]._id, idCompetencias: competencias[16]._id },
    { idapuesta: apuestas[17]._id, idCompetencias: competencias[17]._id },
    { idapuesta: apuestas[18]._id, idCompetencias: competencias[18]._id },
    { idapuesta: apuestas[19]._id, idCompetencias: competencias[19]._id },
    { idapuesta: apuestas[20]._id, idCompetencias: competencias[20]._id },
    { idapuesta: apuestas[21]._id, idCompetencias: competencias[21]._id },
    { idapuesta: apuestas[22]._id, idCompetencias: competencias[22]._id },
    { idapuesta: apuestas[23]._id, idCompetencias: competencias[23]._id },
    { idapuesta: apuestas[24]._id, idCompetencias: competencias[24]._id },
    { idapuesta: apuestas[25]._id, idCompetencias: competencias[25]._id },
    { idapuesta: apuestas[26]._id, idCompetencias: competencias[26]._id },
    { idapuesta: apuestas[27]._id, idCompetencias: competencias[27]._id },
    { idapuesta: apuestas[28]._id, idCompetencias: competencias[28]._id },
    { idapuesta: apuestas[29]._id, idCompetencias: competencias[29]._id },
    { idapuesta: apuestas[30]._id, idCompetencias: competencias[30]._id },
    { idapuesta: apuestas[31]._id, idCompetencias: competencias[31]._id },
    { idapuesta: apuestas[32]._id, idCompetencias: competencias[32]._id },
    { idapuesta: apuestas[33]._id, idCompetencias: competencias[33]._id },
    { idapuesta: apuestas[34]._id, idCompetencias: competencias[34]._id },
    { idapuesta: apuestas[35]._id, idCompetencias: competencias[35]._id },
    { idapuesta: apuestas[36]._id, idCompetencias: competencias[36]._id },
    { idapuesta: apuestas[37]._id, idCompetencias: competencias[37]._id },
    { idapuesta: apuestas[38]._id, idCompetencias: competencias[38]._id },
    { idapuesta: apuestas[39]._id, idCompetencias: competencias[39]._id }
  ];

  await col.insertMany(apComp);
  return apComp;
};

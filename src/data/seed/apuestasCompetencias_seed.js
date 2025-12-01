module.exports = async function apuestasCompetenciasSeed(db, apuestas, competencias) {
  const col = db.collection("apuestasCompetencias");

  if (await col.estimatedDocumentCount()) 
  return await col.find().toArray();

  const apComp = [
    {
      idapuesta: apuestas[0]._id,
      idCompetencias: competencias[0]._id
    }
  ];

  await col.insertMany(apComp);
  return apComp;
};

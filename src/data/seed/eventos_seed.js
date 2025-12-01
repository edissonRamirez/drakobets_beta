const { ObjectId } = require("mongodb");

module.exports = async function eventosSeed(db, competencias) {
  const col = db.collection("evento");

  if (await col.estimatedDocumentCount()) 
  return await col.find().toArray();

  const eventos = [
    {
      _id: new ObjectId(),
      idcompetencia: competencias[0]._id,
      fecha: new Date(),
      ciudadpartido: "Madrid",
      paispartido: "España",
      ganador: null,
      estadisticas: { posesion: 50 },
      descripcion: "Real Madrid vs Man City"
    }
  ];

  await col.insertMany(eventos);
  return eventos;
};

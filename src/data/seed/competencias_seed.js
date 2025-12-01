const { ObjectId } = require("mongodb");
const { isEmpty } = require("../../utils/helpers");

module.exports = async function competenciasSeed(db) {
  const col = db.collection("competencia");

  if (!(await isEmpty(col))) return await col.find().toArray();

  const competencias = [
    {
      _id: new ObjectId(),
      nombrecompetencia: "Champions League",
      fechainicio: new Date("2023-09-01"),
      fechafin: new Date("2024-06-01"),
      descripcion: "Torneo de clubes europeos",
      deporte: {
        iddeporte: 1,
        nombredeporte: "Futbol",
        reglas: "FIFA",
        descripciondeporte: "11 vs 11"
      },
      logo: "champions.png"
    },
    {
      _id: new ObjectId(),
      nombrecompetencia: "NBA",
      fechainicio: new Date("2023-10-01"),
      fechafin: new Date("2024-06-20"),
      descripcion: "Baloncesto profesional USA",
      deporte: {
        iddeporte: 2,
        nombredeporte: "Baloncesto",
        reglas: "FIBA/NBA",
        descripciondeporte: "5 vs 5"
      },
      logo: "nba.png"
    }
  ];

  await col.insertMany(competencias);
  return competencias;
};

const { ObjectId } = require("mongodb");
const { isEmpty } = require("../../utils/helpers");

module.exports = async function equiposSeed(db) {
  const col = db.collection("equipo");

  if (!(await isEmpty(col))) return await col.find().toArray();

  const equipos = [
    {
      _id: new ObjectId(),
      nombre: "Real Madrid",
      paisEquipo: "España",
      ciudadEquipo: "Madrid",
      plantilla: "A",
      escudo: "rm.png"
    },
    {
      _id: new ObjectId(),
      nombre: "Manchester City",
      paisEquipo: "Inglaterra",
      ciudadEquipo: "Manchester",
      plantilla: "A",
      escudo: "mc.png"
    },
    {
      _id: new ObjectId(),
      nombre: "Lakers",
      paisEquipo: "USA",
      ciudadEquipo: "Los Angeles",
      plantilla: "A",
      escudo: "lal.png"
    }
  ];

  await col.insertMany(equipos);
  return equipos;
};

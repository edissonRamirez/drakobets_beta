const { ObjectId } = require("mongodb");
const { isEmpty } = require("../../utils/helpers");

module.exports = async function juegosSeed(db) {
  const col = db.collection("juego");

  if (!(await isEmpty(col))) return await col.find().toArray();

  const juegos = [
    {
      _id: new ObjectId(),
      tipojuego: "Slots",
      descripcionjuego: "Tragamonedas clásica",
      porcentajeganancia: 95.5,
      reglasjuego: "Alinear 3 símbolos"
    },
    {
      _id: new ObjectId(),
      tipojuego: "Ruleta",
      descripcionjuego: "Ruleta Europea",
      porcentajeganancia: 97.3,
      reglasjuego: "Apostar a número o color"
    }
  ];

  await col.insertMany(juegos);
  return juegos;
};

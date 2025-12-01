const { ObjectId } = require("mongodb");
const { isEmpty } = require("../../utils/helpers");

module.exports = async function tipoApuestaSeed(db) {
  const col = db.collection("tipoApuesta");

  if (!(await isEmpty(col))) return await col.find().toArray();

  const tipos = [
    { _id: new ObjectId(), tipo: "Ganador del Partido", cuota: 1.5 },
    { _id: new ObjectId(), tipo: "Más de 2.5 Goles", cuota: 2.1 }
  ];

  await col.insertMany(tipos);
  return tipos;
};

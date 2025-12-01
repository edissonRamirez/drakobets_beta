const { ObjectId } = require("mongodb");
const { isEmpty } = require("../../utils/helpers");

module.exports = async function premiosSeed(db) {
  const col = db.collection("premio");

  if (!(await isEmpty(col))) return await col.find().toArray();

  const premios = [
    {
      _id: new ObjectId(),
      tipopremio: "Bono Bienvenida",
      descripcionpremio: "Crédito extra",
      fechavencimiento: new Date("2025-01-01")
    }
  ];

  await col.insertMany(premios);
  return premios;
};

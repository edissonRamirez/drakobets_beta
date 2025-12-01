const { ObjectId } = require("mongodb");
const { isEmpty } = require("../../utils/helpers");

module.exports = async function usuariosSeed(db) {
  const col = db.collection("usuario");

  if (!(await isEmpty(col))) return await col.find().toArray();

  const usuarios = [
    {
      _id: new ObjectId(),
      cedulausuario: "101050",
      nombres: "Juan",
      apellidos: "Perez",
      correo: "juan@mail.com",
      celular: "3001234567",
      fechanacimiento: new Date("1990-01-01"),
      bonos: [{ idbono: 1, montobono: 50, cedulausuario: "101010" }],
      estadobono: {
        idestadobono: 1,
        estadobono: "activo",
        fechavencimiento: new Date("2024-12-31")
      }
    },
    {
      _id: new ObjectId(),
      cedulausuario: "202020",
      nombres: "Maria",
      apellidos: "Gomez",
      correo: "maria@mail.com",
      celular: "3109876543",
      fechanacimiento: new Date("1995-05-15"),
      bonos: [],
      estadobono: {
        idestadobono: 2,
        estadobono: "inactivo",
        fechavencimiento: new Date("2023-01-01")
      }
    }
  ];

  await col.insertMany(usuarios);
  return usuarios;
};

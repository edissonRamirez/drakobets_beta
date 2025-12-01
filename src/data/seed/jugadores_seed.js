module.exports = async function jugadoresSeed(db, equipos) {
  const col = db.collection("jugador");

  if (await col.estimatedDocumentCount()) 
  return await col.find().toArray();

  const jugadores = [
    {
      nombreJugador: "Vinicius",
      apellidoJugador: "Jr",
      edad: 23,
      nacionalidad: "Brasil",
      idequipo: equipos[0]._id,
      foto: "vini.jpg"
    },
    {
      nombreJugador: "LeBron",
      apellidoJugador: "James",
      edad: 39,
      nacionalidad: "USA",
      idequipo: equipos[2]._id,
      foto: "lebron.jpg"
    }
  ];

  await col.insertMany(jugadores);
  return jugadores;
};

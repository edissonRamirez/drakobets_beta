module.exports = async function jugadoresSeed(db, equipos) {
  const col = db.collection("jugador");

  if (await col.estimatedDocumentCount()) 
  return await col.find().toArray();

  const jugadores = [
    { nombreJugador: "Vinicius", apellidoJugador: "Jr", edad: 23, nacionalidad: "Brasil", idequipo: equipos[0]._id, foto: "vini.jpg" },
    { nombreJugador: "LeBron", apellidoJugador: "James", edad: 39, nacionalidad: "USA", idequipo: equipos[2]._id, foto: "lebron.jpg" },
    { nombreJugador: "Neymar", apellidoJugador: "Santos", edad: 31, nacionalidad: "Brasil", idequipo: equipos[1]._id, foto: "neymar.jpg" },
    { nombreJugador: "Kylian", apellidoJugador: "Mbappé", edad: 25, nacionalidad: "Francia", idequipo: equipos[0]._id, foto: "mbappe.jpg" },
    { nombreJugador: "Erling", apellidoJugador: "Haaland", edad: 23, nacionalidad: "Noruega", idequipo: equipos[1]._id, foto: "haaland.jpg" },
    { nombreJugador: "Roger", apellidoJugador: "Federer", edad: 52, nacionalidad: "Suiza", idequipo: null, foto: "federer.jpg" },
    { nombreJugador: "Novak", apellidoJugador: "Djokovic", edad: 37, nacionalidad: "Serbia", idequipo: null, foto: "djokovic.jpg" },
    { nombreJugador: "Cristiano", apellidoJugador: "Ronaldo", edad: 38, nacionalidad: "Portugal", idequipo: equipos[2]._id, foto: "cr7.jpg" },
    { nombreJugador: "Lionel", apellidoJugador: "Messi", edad: 37, nacionalidad: "Argentina", idequipo: equipos[1]._id, foto: "messi.jpg" },
    { nombreJugador: "Serena", apellidoJugador: "Williams", edad: 42, nacionalidad: "USA", idequipo: null, foto: "serena.jpg" },
    { nombreJugador: "Rafael", apellidoJugador: "Nadal", edad: 38, nacionalidad: "España", idequipo: null, foto: "nadal.jpg" },
    { nombreJugador: "Giannis", apellidoJugador: "Antetokounmpo", edad: 29, nacionalidad: "Grecia", idequipo: equipos[2]._id, foto: "giannis.jpg" },
    { nombreJugador: "Luka", apellidoJugador: "Doncic", edad: 24, nacionalidad: "Eslovenia", idequipo: equipos[0]._id, foto: "luka.jpg" },
    { nombreJugador: "Usain", apellidoJugador: "Bolt", edad: 37, nacionalidad: "Jamaica", idequipo: null, foto: "bolt.jpg" },
    { nombreJugador: "Simone", apellidoJugador: "Biles", edad: 27, nacionalidad: "USA", idequipo: null, foto: "biles.jpg" },
    { nombreJugador: "Rafa", apellidoJugador: "Márquez", edad: 45, nacionalidad: "México", idequipo: null, foto: "marquez.jpg" },
    { nombreJugador: "Conor", apellidoJugador: "McGregor", edad: 35, nacionalidad: "Irlanda", idequipo: null, foto: "mcgregor.jpg" },
    { nombreJugador: "Jon", apellidoJugador: "Jones", edad: 36, nacionalidad: "USA", idequipo: null, foto: "jjones.jpg" },
    { nombreJugador: "Luis", apellidoJugador: "Suárez", edad: 36, nacionalidad: "Uruguay", idequipo: equipos[1]._id, foto: "suarez.jpg" },
    { nombreJugador: "Antoine", apellidoJugador: "Griezmann", edad: 32, nacionalidad: "Francia", idequipo: equipos[0]._id, foto: "griezmann.jpg" },
    { nombreJugador: "Karim", apellidoJugador: "Benzema", edad: 35, nacionalidad: "Francia", idequipo: equipos[0]._id, foto: "benzema.jpg" },
    { nombreJugador: "Virat", apellidoJugador: "Kohli", edad: 35, nacionalidad: "India", idequipo: null, foto: "kohli.jpg" },
    { nombreJugador: "Sachin", apellidoJugador: "Tendulkar", edad: 50, nacionalidad: "India", idequipo: null, foto: "sachin.jpg" },
    { nombreJugador: "Michael", apellidoJugador: "Phelps", edad: 38, nacionalidad: "USA", idequipo: null, foto: "phelps.jpg" },
    { nombreJugador: "Novak", apellidoJugador: "Ivanovic", edad: 36, nacionalidad: "Serbia", idequipo: null, foto: "ivanovic.jpg" },
    { nombreJugador: "Son", apellidoJugador: "Heung-Min", edad: 31, nacionalidad: "Corea del Sur", idequipo: equipos[2]._id, foto: "son.jpg" },
    { nombreJugador: "Mohamed", apellidoJugador: "Salah", edad: 31, nacionalidad: "Egipto", idequipo: equipos[1]._id, foto: "salah.jpg" },
    { nombreJugador: "Tiger", apellidoJugador: "Woods", edad: 47, nacionalidad: "USA", idequipo: null, foto: "tiger.jpg" },
    { nombreJugador: "Rory", apellidoJugador: "McIlroy", edad: 34, nacionalidad: "Irlanda del Norte", idequipo: null, foto: "mcilroy.jpg" },
    { nombreJugador: "Novak", apellidoJugador: "Murray", edad: 36, nacionalidad: "Escocia", idequipo: null, foto: "murray.jpg" },
    { nombreJugador: "Sasha", apellidoJugador: "Vujacic", edad: 40, nacionalidad: "Serbia", idequipo: equipos[2]._id, foto: "vujacic.jpg" },
    { nombreJugador: "Kobe", apellidoJugador: "Bryant", edad: 45, nacionalidad: "USA", idequipo: equipos[0]._id, foto: "kobe.jpg" },
    { nombreJugador: "Stephen", apellidoJugador: "Curry", edad: 35, nacionalidad: "USA", idequipo: equipos[1]._id, foto: "curry.jpg" },
    { nombreJugador: "Goku", apellidoJugador: "Son", edad: 28, nacionalidad: "Japón", idequipo: null, foto: "goku.jpg" },
    { nombreJugador: "Lewis", apellidoJugador: "Hamilton", edad: 38, nacionalidad: "Reino Unido", idequipo: null, foto: "hamilton.jpg" },
    { nombreJugador: "Max", apellidoJugador: "Verstappen", edad: 26, nacionalidad: "Países Bajos", idequipo: null, foto: "verstappen.jpg" },
    { nombreJugador: "Fernando", apellidoJugador: "Alonso", edad: 43, nacionalidad: "España", idequipo: null, foto: "alonso.jpg" },
    { nombreJugador: "Patrick", apellidoJugador: "Mahomes", edad: 28, nacionalidad: "USA", idequipo: equipos[0]._id, foto: "mahomes.jpg" },
    { nombreJugador: "Travis", apellidoJugador: "Kelce", edad: 34, nacionalidad: "USA", idequipo: equipos[0]._id, foto: "kelce.jpg" },
    { nombreJugador: "Tyson", apellidoJugador: "Fury", edad: 35, nacionalidad: "Reino Unido", idequipo: null, foto: "fury.jpg" }
  ];

  await col.insertMany(jugadores);
  return jugadores;
};

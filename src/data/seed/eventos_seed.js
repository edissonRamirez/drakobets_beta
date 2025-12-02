const { ObjectId } = require("mongodb");

module.exports = async function eventosSeed(db, competencias) {
  const col = db.collection("evento");

  if (await col.estimatedDocumentCount()) 
  return await col.find().toArray();

  const eventos = [
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(), ciudadpartido: "Madrid", paispartido: "España", ganador: null, estadisticas: { posesion: 50 }, descripcion: "Real Madrid vs Man City" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 86400000), ciudadpartido: "Barcelona", paispartido: "España", ganador: null, estadisticas: { posesion: 55 }, descripcion: "Barcelona vs Bayern" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 2*86400000), ciudadpartido: "Londres", paispartido: "Reino Unido", ganador: null, estadisticas: { posesion: 48 }, descripcion: "Manchester United vs Liverpool" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 3*86400000), ciudadpartido: "París", paispartido: "Francia", ganador: null, estadisticas: { posesion: 60 }, descripcion: "PSG vs Nantes" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 4*86400000), ciudadpartido: "Milán", paispartido: "Italia", ganador: null, estadisticas: { posesion: 52 }, descripcion: "AC Milan vs Inter" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 5*86400000), ciudadpartido: "Berlín", paispartido: "Alemania", ganador: null, estadisticas: { posesion: 49 }, descripcion: "Bayern vs Dortmund" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 6*86400000), ciudadpartido: "Lisboa", paispartido: "Portugal", ganador: null, estadisticas: { posesion: 54 }, descripcion: "Benfica vs Porto" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 7*86400000), ciudadpartido: "Amsterdam", paispartido: "Países Bajos", ganador: null, estadisticas: { posesion: 58 }, descripcion: "Ajax vs PSV" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 8*86400000), ciudadpartido: "Estambul", paispartido: "Turquía", ganador: null, estadisticas: { posesion: 51 }, descripcion: "Galatasaray vs Fenerbahce" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 9*86400000), ciudadpartido: "Atenas", paispartido: "Grecia", ganador: null, estadisticas: { posesion: 46 }, descripcion: "Olympiacos vs Panathinaikos" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 10*86400000), ciudadpartido: "Buenos Aires", paispartido: "Argentina", ganador: null, estadisticas: { posesion: 53 }, descripcion: "River vs Boca" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 11*86400000), ciudadpartido: "São Paulo", paispartido: "Brasil", ganador: null, estadisticas: { posesion: 57 }, descripcion: "Corinthians vs Santos" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 12*86400000), ciudadpartido: "Ciudad de México", paispartido: "México", ganador: null, estadisticas: { posesion: 50 }, descripcion: "Guadalajara vs América" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 13*86400000), ciudadpartido: "Nueva York", paispartido: "USA", ganador: null, estadisticas: { posesion: 55 }, descripcion: "New York Red Bulls vs LAFC" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 14*86400000), ciudadpartido: "Tokio", paispartido: "Japón", ganador: null, estadisticas: { posesion: 49 }, descripcion: "Tokyo vs Osaka" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 15*86400000), ciudadpartido: "Seúl", paispartido: "Corea del Sur", ganador: null, estadisticas: { posesion: 52 }, descripcion: "Seoul FC vs Ulsan" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 16*86400000), ciudadpartido: "Estocolmo", paispartido: "Suecia", ganador: null, estadisticas: { posesion: 51 }, descripcion: "AIK vs Malmö" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 17*86400000), ciudadpartido: "Copenhague", paispartido: "Dinamarca", ganador: null, estadisticas: { posesion: 48 }, descripcion: "FC Copenhagen vs Brøndby" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 18*86400000), ciudadpartido: "Varsovia", paispartido: "Polonia", ganador: null, estadisticas: { posesion: 54 }, descripcion: "Legia vs Wisla" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 19*86400000), ciudadpartido: "Praga", paispartido: "República Checa", ganador: null, estadisticas: { posesion: 50 }, descripcion: "Slavia vs Sparta" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 20*86400000), ciudadpartido: "Bucarest", paispartido: "Rumania", ganador: null, estadisticas: { posesion: 56 }, descripcion: "Steaua vs Dinamo" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 21*86400000), ciudadpartido: "Moscú", paispartido: "Rusia", ganador: null, estadisticas: { posesion: 47 }, descripcion: "CSKA vs Lokomotiv" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 22*86400000), ciudadpartido: "Estambul", paispartido: "Turquía", ganador: null, estadisticas: { posesion: 53 }, descripcion: "Besiktas vs Trabzonspor" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 23*86400000), ciudadpartido: "Teherán", paispartido: "Irán", ganador: null, estadisticas: { posesion: 51 }, descripcion: "Persepolis vs Esteghlal" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 24*86400000), ciudadpartido: "Bangkok", paispartido: "Tailandia", ganador: null, estadisticas: { posesion: 55 }, descripcion: "Bangkok United vs Muangthong" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 25*86400000), ciudadpartido: "Jakarta", paispartido: "Indonesia", ganador: null, estadisticas: { posesion: 49 }, descripcion: "Persija vs Persib" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 26*86400000), ciudadpartido: "Singapur", paispartido: "Singapur", ganador: null, estadisticas: { posesion: 52 }, descripcion: "Singapore FC vs Geylang" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 27*86400000), ciudadpartido: "Dubái", paispartido: "Emiratos Árabes", ganador: null, estadisticas: { posesion: 50 }, descripcion: "Al Ain vs Al Ahli" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 28*86400000), ciudadpartido: "Riad", paispartido: "Arabia Saudita", ganador: null, estadisticas: { posesion: 54 }, descripcion: "Al Nassr vs Al Hilal" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 29*86400000), ciudadpartido: "El Cairo", paispartido: "Egipto", ganador: null, estadisticas: { posesion: 48 }, descripcion: "Al Ahly vs Zamalek" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 30*86400000), ciudadpartido: "Lagos", paispartido: "Nigeria", ganador: null, estadisticas: { posesion: 56 }, descripcion: "Gor Mahia vs Express" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 31*86400000), ciudadpartido: "Accra", paispartido: "Ghana", ganador: null, estadisticas: { posesion: 51 }, descripcion: "Asante Kotoko vs Hearts of Oak" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 32*86400000), ciudadpartido: "Johannesburgo", paispartido: "Sudáfrica", ganador: null, estadisticas: { posesion: 53 }, descripcion: "Kaizer Chiefs vs Orlandi Pirates" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 33*86400000), ciudadpartido: "Casablanca", paispartido: "Marruecos", ganador: null, estadisticas: { posesion: 47 }, descripcion: "Raja vs Wydad" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 34*86400000), ciudadpartido: "Túnez", paispartido: "Túnez", ganador: null, estadisticas: { posesion: 50 }, descripcion: "Al Ahly vs Sfaxien" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 35*86400000), ciudadpartido: "Nairobi", paispartido: "Kenia", ganador: null, estadisticas: { posesion: 55 }, descripcion: "Gor Mahia vs AFC Leopards" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 36*86400000), ciudadpartido: "Pekín", paispartido: "China", ganador: null, estadisticas: { posesion: 52 }, descripcion: "Beijing vs Shanghai" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 37*86400000), ciudadpartido: "Melbourne", paispartido: "Australia", ganador: null, estadisticas: { posesion: 49 }, descripcion: "Melbourne City vs Sydney FC" },
    { _id: new ObjectId(), idcompetencia: competencias[0]._id, fecha: new Date(Date.now() - 38*86400000), ciudadpartido: "Auckland", paispartido: "Nueva Zelanda", ganador: null, estadisticas: { posesion: 54 }, descripcion: "Auckland City vs Wellington" },
    { _id: new ObjectId(), idcompetencia: competencias[1]._id, fecha: new Date(Date.now() - 39*86400000), ciudadpartido: "Christchurch", paispartido: "Nueva Zelanda", ganador: null, estadisticas: { posesion: 51 }, descripcion: "Christchurch vs Dunedin" }
  ];

  await col.insertMany(eventos);
  return eventos;
};

const { ObjectId } = require("mongodb");
const { isEmpty } = require("../../utils/helpers");

module.exports = async function equiposSeed(db) {
  const col = db.collection("equipo");

  if (!(await isEmpty(col))) return await col.find().toArray();

  const equipos = [
    { _id: new ObjectId(), nombre: "Real Madrid", paisEquipo: "España", ciudadEquipo: "Madrid", plantilla: "A", escudo: "rm.png" },
    { _id: new ObjectId(), nombre: "Manchester City", paisEquipo: "Inglaterra", ciudadEquipo: "Manchester", plantilla: "A", escudo: "mc.png" },
    { _id: new ObjectId(), nombre: "Lakers", paisEquipo: "USA", ciudadEquipo: "Los Angeles", plantilla: "A", escudo: "lal.png" },
    { _id: new ObjectId(), nombre: "Barcelona", paisEquipo: "España", ciudadEquipo: "Barcelona", plantilla: "A", escudo: "fcb.png" },
    { _id: new ObjectId(), nombre: "Bayern Munich", paisEquipo: "Alemania", ciudadEquipo: "Múnich", plantilla: "A", escudo: "fcb.png" },
    { _id: new ObjectId(), nombre: "Liverpool", paisEquipo: "Inglaterra", ciudadEquipo: "Liverpool", plantilla: "A", escudo: "lfc.png" },
    { _id: new ObjectId(), nombre: "Paris Saint-Germain", paisEquipo: "Francia", ciudadEquipo: "París", plantilla: "A", escudo: "psg.png" },
    { _id: new ObjectId(), nombre: "AC Milan", paisEquipo: "Italia", ciudadEquipo: "Milán", plantilla: "A", escudo: "acm.png" },
    { _id: new ObjectId(), nombre: "Inter Milan", paisEquipo: "Italia", ciudadEquipo: "Milán", plantilla: "A", escudo: "im.png" },
    { _id: new ObjectId(), nombre: "Juventus", paisEquipo: "Italia", ciudadEquipo: "Turín", plantilla: "A", escudo: "jfc.png" },
    { _id: new ObjectId(), nombre: "Chelsea", paisEquipo: "Inglaterra", ciudadEquipo: "Londres", plantilla: "A", escudo: "cfc.png" },
    { _id: new ObjectId(), nombre: "Arsenal", paisEquipo: "Inglaterra", ciudadEquipo: "Londres", plantilla: "A", escudo: "afc.png" },
    { _id: new ObjectId(), nombre: "Manchester United", paisEquipo: "Inglaterra", ciudadEquipo: "Manchester", plantilla: "A", escudo: "manu.png" },
    { _id: new ObjectId(), nombre: "Tottenham", paisEquipo: "Inglaterra", ciudadEquipo: "Londres", plantilla: "A", escudo: "thfc.png" },
    { _id: new ObjectId(), nombre: "Ajax", paisEquipo: "Países Bajos", ciudadEquipo: "Amsterdam", plantilla: "A", escudo: "ajax.png" },
    { _id: new ObjectId(), nombre: "Atlético Madrid", paisEquipo: "España", ciudadEquipo: "Madrid", plantilla: "A", escudo: "atm.png" },
    { _id: new ObjectId(), nombre: "Benfica", paisEquipo: "Portugal", ciudadEquipo: "Lisboa", plantilla: "A", escudo: "sfb.png" },
    { _id: new ObjectId(), nombre: "Porto", paisEquipo: "Portugal", ciudadEquipo: "Oporto", plantilla: "A", escudo: "fcp.png" },
    { _id: new ObjectId(), nombre: "Dortmund", paisEquipo: "Alemania", ciudadEquipo: "Dortmund", plantilla: "A", escudo: "bvb.png" },
    { _id: new ObjectId(), nombre: "Lyon", paisEquipo: "Francia", ciudadEquipo: "Lyon", plantilla: "A", escudo: "ol.png" },
    { _id: new ObjectId(), nombre: "Galatasaray", paisEquipo: "Turquía", ciudadEquipo: "Estambul", plantilla: "A", escudo: "gs.png" },
    { _id: new ObjectId(), nombre: "Fenerbahçe", paisEquipo: "Turquía", ciudadEquipo: "Estambul", plantilla: "A", escudo: "fb.png" },
    { _id: new ObjectId(), nombre: "River Plate", paisEquipo: "Argentina", ciudadEquipo: "Buenos Aires", plantilla: "A", escudo: "ca.png" },
    { _id: new ObjectId(), nombre: "Boca Juniors", paisEquipo: "Argentina", ciudadEquipo: "Buenos Aires", plantilla: "A", escudo: "bjfc.png" },
    { _id: new ObjectId(), nombre: "Flamengo", paisEquipo: "Brasil", ciudadEquipo: "Río de Janeiro", plantilla: "A", escudo: "flamengo.png" },
    { _id: new ObjectId(), nombre: "São Paulo FC", paisEquipo: "Brasil", ciudadEquipo: "São Paulo", plantilla: "A", escudo: "spfc.png" },
    { _id: new ObjectId(), nombre: "Corinthians", paisEquipo: "Brasil", ciudadEquipo: "São Paulo", plantilla: "A", escudo: "sccp.png" },
    { _id: new ObjectId(), nombre: "Guadalajara", paisEquipo: "México", ciudadEquipo: "Guadalajara", plantilla: "A", escudo: "chivas.png" },
    { _id: new ObjectId(), nombre: "LAFC", paisEquipo: "USA", ciudadEquipo: "Los Angeles", plantilla: "A", escudo: "lafc.png" },
    { _id: new ObjectId(), nombre: "Golden State Warriors", paisEquipo: "USA", ciudadEquipo: "San Francisco", plantilla: "A", escudo: "gsw.png" },
    { _id: new ObjectId(), nombre: "Boston Celtics", paisEquipo: "USA", ciudadEquipo: "Boston", plantilla: "A", escudo: "bc.png" },
    { _id: new ObjectId(), nombre: "Miami Heat", paisEquipo: "USA", ciudadEquipo: "Miami", plantilla: "A", escudo: "mh.png" },
    { _id: new ObjectId(), nombre: "Chicago Bulls", paisEquipo: "USA", ciudadEquipo: "Chicago", plantilla: "A", escudo: "cb.png" },
    { _id: new ObjectId(), nombre: "New York Knicks", paisEquipo: "USA", ciudadEquipo: "Nueva York", plantilla: "A", escudo: "nyk.png" },
    { _id: new ObjectId(), nombre: "Olympiacos", paisEquipo: "Grecia", ciudadEquipo: "Atenas", plantilla: "A", escudo: "olympiacos.png" },
    { _id: new ObjectId(), nombre: "AEK Atenas", paisEquipo: "Grecia", ciudadEquipo: "Atenas", plantilla: "A", escudo: "aek.png" },
    { _id: new ObjectId(), nombre: "Celtic", paisEquipo: "Escocia", ciudadEquipo: "Glasgow", plantilla: "A", escudo: "cfc.png" },
    { _id: new ObjectId(), nombre: "Rangers", paisEquipo: "Escocia", ciudadEquipo: "Glasgow", plantilla: "A", escudo: "rfc.png" },
    { _id: new ObjectId(), nombre: "Borussia Mönchengladbach", paisEquipo: "Alemania", ciudadEquipo: "Mönchengladbach", plantilla: "A", escudo: "bmg.png" },
    { _id: new ObjectId(), nombre: "RB Leipzig", paisEquipo: "Alemania", ciudadEquipo: "Leipzig", plantilla: "A", escudo: "rbl.png" }
  ];

  await col.insertMany(equipos);
  return equipos;
};

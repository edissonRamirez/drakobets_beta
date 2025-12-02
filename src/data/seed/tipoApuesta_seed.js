const { ObjectId } = require("mongodb");
const { isEmpty } = require("../../utils/helpers");

module.exports = async function tipoApuestaSeed(db) {
  const col = db.collection("tipoApuesta");

  if (!(await isEmpty(col))) return await col.find().toArray();

  const tipos = [
    { _id: new ObjectId(), tipo: "Ganador del Partido", cuota: 1.5 },
    { _id: new ObjectId(), tipo: "Más de 2.5 Goles", cuota: 2.1 },
    { _id: new ObjectId(), tipo: "Menos de 2.5 Goles", cuota: 1.8 },
    { _id: new ObjectId(), tipo: "Ambos Equipos Anotan", cuota: 1.9 },
    { _id: new ObjectId(), tipo: "Primer Gol", cuota: 2.2 },
    { _id: new ObjectId(), tipo: "Resultado Exacto", cuota: 3.5 },
    { _id: new ObjectId(), tipo: "Tarjeta Amarilla", cuota: 1.7 },
    { _id: new ObjectId(), tipo: "Tarjeta Roja", cuota: 4.2 },
    { _id: new ObjectId(), tipo: "Goles en Primer Tiempo", cuota: 2.0 },
    { _id: new ObjectId(), tipo: "Goles en Segundo Tiempo", cuota: 2.1 },
    { _id: new ObjectId(), tipo: "Total de Córneres", cuota: 1.6 },
    { _id: new ObjectId(), tipo: "Total de Faltas", cuota: 1.5 },
    { _id: new ObjectId(), tipo: "Más de 3.5 Goles", cuota: 2.3 },
    { _id: new ObjectId(), tipo: "Menos de 3.5 Goles", cuota: 1.7 },
    { _id: new ObjectId(), tipo: "Más de 4.5 Goles", cuota: 2.8 },
    { _id: new ObjectId(), tipo: "Menos de 4.5 Goles", cuota: 1.6 },
    { _id: new ObjectId(), tipo: "Más de 5.5 Goles", cuota: 3.2 },
    { _id: new ObjectId(), tipo: "Menos de 5.5 Goles", cuota: 1.5 },
    { _id: new ObjectId(), tipo: "Equipo Local Gana", cuota: 1.8 },
    { _id: new ObjectId(), tipo: "Equipo Visitante Gana", cuota: 2.0 },
    { _id: new ObjectId(), tipo: "Empate", cuota: 2.5 },
    { _id: new ObjectId(), tipo: "Gol Anulado", cuota: 3.8 },
    { _id: new ObjectId(), tipo: "Penalty", cuota: 2.6 },
    { _id: new ObjectId(), tipo: "Fuera de Juego", cuota: 1.9 },
    { _id: new ObjectId(), tipo: "Doble Oportunidad 1X", cuota: 1.4 },
    { _id: new ObjectId(), tipo: "Doble Oportunidad 12", cuota: 1.3 },
    { _id: new ObjectId(), tipo: "Doble Oportunidad 2X", cuota: 1.5 },
    { _id: new ObjectId(), tipo: "Gol Local Primero", cuota: 2.3 },
    { _id: new ObjectId(), tipo: "Gol Visitante Primero", cuota: 2.4 },
    { _id: new ObjectId(), tipo: "Cuota Doble", cuota: 1.8 },
    { _id: new ObjectId(), tipo: "Ventaja Handicap -1", cuota: 2.1 },
    { _id: new ObjectId(), tipo: "Ventaja Handicap +1", cuota: 1.9 },
    { _id: new ObjectId(), tipo: "Ventaja Handicap -2", cuota: 2.5 },
    { _id: new ObjectId(), tipo: "Ventaja Handicap +2", cuota: 1.7 },
    { _id: new ObjectId(), tipo: "Más Goles que el Equipo Local", cuota: 2.2 },
    { _id: new ObjectId(), tipo: "Más Goles que el Equipo Visitante", cuota: 2.3 },
    { _id: new ObjectId(), tipo: "Ambos Equipos Anotan Sí", cuota: 1.85 },
    { _id: new ObjectId(), tipo: "Ambos Equipos Anotan No", cuota: 1.95 },
    { _id: new ObjectId(), tipo: "Resultado Halftime/Fulltime", cuota: 3.2 },
    { _id: new ObjectId(), tipo: "Tanto Exacto en Primer Tiempo", cuota: 3.8 }
  ];

  await col.insertMany(tipos);
  return tipos;
};

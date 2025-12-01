const usuariosSeed = require("./seed/usuarios_seed.js");
const competenciasSeed = require("./seed/competencias_seed.js");
const equiposSeed = require("./seed/equipos_seed.js");
const jugadoresSeed = require("./seed/jugadores_seed.js");
const juegosSeed = require("./seed/juegos_seed.js");
const premiosSeed = require("./seed/premios_seed.js");
const tipoApuestaSeed = require("./seed/tipoApuesta_seed.js");
const eventosSeed = require("./seed/eventos_seed.js");
const transaccionesSeed = require("./seed/transacciones_seed.js");
const apuestaCasinoSeed = require("./seed/apuestaCasino_seed.js");
const apuestasSeed = require("./seed/apuestas_seed.js");
const detalleApuestaSeed = require("./seed/detalleApuesta_seed.js");
const apuestasCompetenciasSeed = require("./seed/apuestasCompetencias_seed.js");

module.exports = async function seedDatabase(db) {

  const usuarios = await usuariosSeed(db);
  const competencias = await competenciasSeed(db);
  const equipos = await equiposSeed(db);
  const jugadores = await jugadoresSeed(db, equipos);
  const juegos = await juegosSeed(db);
  const premios = await premiosSeed(db);
  const tiposApuesta = await tipoApuestaSeed(db);
  const eventos = await eventosSeed(db, competencias);
  const transacciones = await transaccionesSeed(db, usuarios);
  const apuestasCasino = await apuestaCasinoSeed(db, usuarios, juegos);
  const apuestas = await apuestasSeed(db, usuarios, premios);
  const detalles = await detalleApuestaSeed(db, apuestas, eventos, tiposApuesta);
  const apuestasComp = await apuestasCompetenciasSeed(db, apuestas, competencias);

  return {
    usuarios,
    competencias,
    equipos,
    jugadores,
    juegos,
    premios,
    tiposApuesta,
    eventos,
    transacciones,
    apuestasCasino,
    apuestas,
    detalles,
    apuestasComp
  };
};

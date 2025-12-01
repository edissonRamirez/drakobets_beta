const usuarioIndex = require("./usuario_index");
const transaccionIndex = require("./transaccion_index");
const apuestaIndex = require("./apuesta_index");
const apuestaCasinoIndex = require("./apuestaCasino_index");
const eventoIndex = require("./evento_index");
const competenciaIndex = require("./competencia_index");

module.exports = async function createAllIndexes(db) {
  await usuarioIndex(db);
  await transaccionIndex(db);
  await apuestaIndex(db);
  await apuestaCasinoIndex(db);
  await eventoIndex(db);
  await competenciaIndex(db);
};

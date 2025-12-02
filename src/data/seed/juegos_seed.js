const { ObjectId } = require("mongodb");
const { isEmpty } = require("../../utils/helpers");

module.exports = async function juegosSeed(db) {
  const col = db.collection("juego");

  if (!(await isEmpty(col))) return await col.find().toArray();

  const juegos = [
    { _id: new ObjectId(), tipojuego: "Slots", descripcionjuego: "Tragamonedas clásica", porcentajeganancia: 95.5, reglasjuego: "Alinear 3 símbolos" },
    { _id: new ObjectId(), tipojuego: "Ruleta", descripcionjuego: "Ruleta Europea", porcentajeganancia: 97.3, reglasjuego: "Apostar a número o color" },
    { _id: new ObjectId(), tipojuego: "Blackjack", descripcionjuego: "21 Clásico", porcentajeganancia: 99.0, reglasjuego: "Llegar a 21 sin pasarse" },
    { _id: new ObjectId(), tipojuego: "Póker", descripcionjuego: "Póker Texas Hold'em", porcentajeganancia: 98.5, reglasjuego: "Mejor combinación de cartas" },
    { _id: new ObjectId(), tipojuego: "Baccarat", descripcionjuego: "Baccarat Clásico", porcentajeganancia: 98.6, reglasjuego: "Banquero vs Jugador" },
    { _id: new ObjectId(), tipojuego: "Video Póker", descripcionjuego: "Póker en máquina", porcentajeganancia: 96.8, reglasjuego: "Formar mano ganadora" },
    { _id: new ObjectId(), tipojuego: "Dados", descripcionjuego: "Craps", porcentajeganancia: 98.6, reglasjuego: "Tirar dados y apostar" },
    { _id: new ObjectId(), tipojuego: "Keno", descripcionjuego: "Keno Clásico", porcentajeganancia: 90.0, reglasjuego: "Seleccionar números ganadores" },
    { _id: new ObjectId(), tipojuego: "Máquinas Tragamonedas", descripcionjuego: "Slots Moderno", porcentajeganancia: 96.2, reglasjuego: "Coincidir líneas de pago" },
    { _id: new ObjectId(), tipojuego: "Ruleta Americana", descripcionjuego: "Ruleta con doble cero", porcentajeganancia: 94.7, reglasjuego: "Apostar a números" },
    { _id: new ObjectId(), tipojuego: "Casino War", descripcionjuego: "Juego de cartas simple", porcentajeganancia: 97.0, reglasjuego: "Carta más alta gana" },
    { _id: new ObjectId(), tipojuego: "Sic Bo", descripcionjuego: "Dados chinos", porcentajeganancia: 97.2, reglasjuego: "Predecir resultado de 3 dados" },
    { _id: new ObjectId(), tipojuego: "Pai Gow", descripcionjuego: "Dominó chino", porcentajeganancia: 97.1, reglasjuego: "Dos manos de 2 cartas" },
    { _id: new ObjectId(), tipojuego: "Roulette King", descripcionjuego: "Ruleta Premium", porcentajeganancia: 97.5, reglasjuego: "Opciones de apuesta avanzadas" },
    { _id: new ObjectId(), tipojuego: "Mega Slots", descripcionjuego: "Máquinas de gran premio", porcentajeganancia: 97.8, reglasjuego: "Activar bonus y jackpot" },
    { _id: new ObjectId(), tipojuego: "Lightning Roulette", descripcionjuego: "Ruleta con multiplicadores", porcentajeganancia: 97.0, reglasjuego: "Rayos multiplican ganancias" },
    { _id: new ObjectId(), tipojuego: "Blackjack Live", descripcionjuego: "Blackjack con crupier en vivo", porcentajeganancia: 99.4, reglasjuego: "Juego en tiempo real" },
    { _id: new ObjectId(), tipojuego: "Dragon Tiger", descripcionjuego: "Lucha de dragones", porcentajeganancia: 96.5, reglasjuego: "Dragón vs Tigre más alto" },
    { _id: new ObjectId(), tipojuego: "Baccarat Squeeze", descripcionjuego: "Baccarat con tensión", porcentajeganancia: 98.7, reglasjuego: "Ver cartas lentamente" },
    { _id: new ObjectId(), tipojuego: "Three Card Poker", descripcionjuego: "Póker de 3 cartas", porcentajeganancia: 96.6, reglasjuego: "Mano de 3 cartas gana" },
    { _id: new ObjectId(), tipojuego: "Caribbean Stud", descripcionjuego: "Póker del Caribe", porcentajeganancia: 97.3, reglasjuego: "Vencer la mano del banquero" },
    { _id: new ObjectId(), tipojuego: "Let It Ride", descripcionjuego: "Póker de apuesta", porcentajeganancia: 96.8, reglasjuego: "Retira apuestas o deja pasar" },
    { _id: new ObjectId(), tipojuego: "Progressive Jackpot", descripcionjuego: "Jackpot progresivo", porcentajeganancia: 95.0, reglasjuego: "Acumular grandes premios" },
    { _id: new ObjectId(), tipojuego: "Wheel of Fortune", descripcionjuego: "Rueda de la fortuna", porcentajeganancia: 94.5, reglasjuego: "Girar y ganar premios" },
    { _id: new ObjectId(), tipojuego: "Money Wheel", descripcionjuego: "Rueda de dinero", porcentajeganancia: 93.8, reglasjuego: "Apunta y gira" },
    { _id: new ObjectId(), tipojuego: "Crazy Time", descripcionjuego: "Tiempo loco en vivo", porcentajeganancia: 96.0, reglasjuego: "Mini juegos y bonus" },
    { _id: new ObjectId(), tipojuego: "Dream Catcher", descripcionjuego: "Atrapasueños", porcentajeganancia: 96.3, reglasjuego: "Rueda con números" },
    { _id: new ObjectId(), tipojuego: "Football Studio", descripcionjuego: "Estudio de fútbol", porcentajeganancia: 98.4, reglasjuego: "Casa vs Visitante" },
    { _id: new ObjectId(), tipojuego: "Monopoly Live", descripcionjuego: "Monopoly en vivo", porcentajeganancia: 96.2, reglasjuego: "Tablero y dados interactivos" },
    { _id: new ObjectId(), tipojuego: "Game Show", descripcionjuego: "Show de juegos", porcentajeganancia: 95.9, reglasjuego: "Múltiples rondas de premios" },
    { _id: new ObjectId(), tipojuego: "Slots Dorado", descripcionjuego: "Máquinas oro puro", porcentajeganancia: 96.9, reglasjuego: "Símbolos de oro dan bonus" },
    { _id: new ObjectId(), tipojuego: "Aztec Treasures", descripcionjuego: "Tesoros aztecas", porcentajeganancia: 96.4, reglasjuego: "Símbolos antiguos pagan" },
    { _id: new ObjectId(), tipojuego: "Egyptian Gold", descripcionjuego: "Oro egipcio", porcentajeganancia: 96.7, reglasjuego: "Símbolos faraón multiplican" },
    { _id: new ObjectId(), tipojuego: "Magic Wand", descripcionjuego: "Varita mágica", porcentajeganancia: 97.1, reglasjuego: "Magia transforma símbolos" },
    { _id: new ObjectId(), tipojuego: "Dragon Quest", descripcionjuego: "Búsqueda del dragón", porcentajeganancia: 97.2, reglasjuego: "Derrota dragón y gana jackpot" },
    { _id: new ObjectId(), tipojuego: "Mystical Forest", descripcionjuego: "Bosque místico", porcentajeganancia: 96.5, reglasjuego: "Símbolos mágicos en el bosque" },
    { _id: new ObjectId(), tipojuego: "Enchanted Garden", descripcionjuego: "Jardín encantado", porcentajeganancia: 96.8, reglasjuego: "Flores dan premios" },
    { _id: new ObjectId(), tipojuego: "Safari Adventure", descripcionjuego: "Aventura safari", porcentajeganancia: 96.3, reglasjuego: "Animales dan ganancias" },
    { _id: new ObjectId(), tipojuego: "Ocean Riches", descripcionjuego: "Riquezas del océano", porcentajeganancia: 97.0, reglasjuego: "Criaturas marinas pagan bien" },
    { _id: new ObjectId(), tipojuego: "Sky Treasures", descripcionjuego: "Tesoros del cielo", porcentajeganancia: 97.4, reglasjuego: "Alcanza las nubes ganadoras" }
  ];

  await col.insertMany(juegos);
  return juegos;
};

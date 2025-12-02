const { ObjectId } = require("mongodb");
const { isEmpty } = require("../../utils/helpers");

module.exports = async function premiosSeed(db) {
  const col = db.collection("premio");

  if (!(await isEmpty(col))) return await col.find().toArray();

  const premios = [
    { _id: new ObjectId(), tipopremio: "Bono Bienvenida", descripcionpremio: "Crédito extra", fechavencimiento: new Date("2025-01-01") },
    { _id: new ObjectId(), tipopremio: "Bono Referido", descripcionpremio: "Premio por invitar amigos", fechavencimiento: new Date("2025-02-15") },
    { _id: new ObjectId(), tipopremio: "Cashback 5%", descripcionpremio: "Devolución en depósitos", fechavencimiento: new Date("2025-03-20") },
    { _id: new ObjectId(), tipopremio: "Bono Apuestas Gratis", descripcionpremio: "Crédito para apuestas sin riesgo", fechavencimiento: new Date("2025-04-10") },
    { _id: new ObjectId(), tipopremio: "Multiplicador x2", descripcionpremio: "Duplica tus ganancias", fechavencimiento: new Date("2025-05-05") },
    { _id: new ObjectId(), tipopremio: "Bono Fin de Semana", descripcionpremio: "Crédito adicional viernes a domingo", fechavencimiento: new Date("2025-06-30") },
    { _id: new ObjectId(), tipopremio: "Bono Acumulador", descripcionpremio: "Bonificación por acumular apuestas", fechavencimiento: new Date("2025-07-15") },
    { _id: new ObjectId(), tipopremio: "Free Bet 100", descripcionpremio: "Apuesta gratis de 100 puntos", fechavencimiento: new Date("2025-08-20") },
    { _id: new ObjectId(), tipopremio: "Bono VIP", descripcionpremio: "Acceso a promociones exclusivas", fechavencimiento: new Date("2025-09-10") },
    { _id: new ObjectId(), tipopremio: "Bono Depósito Match", descripcionpremio: "Igualamos tu depósito 50%", fechavencimiento: new Date("2025-10-25") },
    { _id: new ObjectId(), tipopremio: "Puntos Lealtad", descripcionpremio: "Acumula puntos en cada apuesta", fechavencimiento: new Date("2025-11-30") },
    { _id: new ObjectId(), tipopremio: "Bono Comebackgain", descripcionpremio: "Recupera pérdidas", fechavencimiento: new Date("2026-01-05") },
    { _id: new ObjectId(), tipopremio: "Bono Torneos", descripcionpremio: "Premio por participación en torneos", fechavencimiento: new Date("2026-02-14") },
    { _id: new ObjectId(), tipopremio: "Jackpot Progresivo", descripcionpremio: "Premio acumulativo semanal", fechavencimiento: new Date("2026-03-31") },
    { _id: new ObjectId(), tipopremio: "Bono Aniversario", descripcionpremio: "Celebra con nosotros", fechavencimiento: new Date("2026-04-20") },
    { _id: new ObjectId(), tipopremio: "Bono Ganadore", descripcionpremio: "Crédito para ganadores consistentes", fechavencimiento: new Date("2026-05-15") },
    { _id: new ObjectId(), tipopremio: "Cashback Mensual", descripcionpremio: "Devolución del 3% mensual", fechavencimiento: new Date("2026-06-30") },
    { _id: new ObjectId(), tipopremio: "Bono Sorpresa", descripcionpremio: "Crédito aleatorio para clientes", fechavencimiento: new Date("2026-07-10") },
    { _id: new ObjectId(), tipopremio: "Bono Partidos Premium", descripcionpremio: "Acceso a eventos especiales", fechavencimiento: new Date("2026-08-25") },
    { _id: new ObjectId(), tipopremio: "Bono Múltiple", descripcionpremio: "Triplicador en apuestas combinadas", fechavencimiento: new Date("2026-09-15") },
    { _id: new ObjectId(), tipopremio: "Free Spin 50", descripcionpremio: "50 giros gratis", fechavencimiento: new Date("2026-10-30") },
    { _id: new ObjectId(), tipopremio: "Bono Móvil", descripcionpremio: "Crédito exclusivo en app móvil", fechavencimiento: new Date("2026-11-20") },
    { _id: new ObjectId(), tipopremio: "Bono Mercado", descripcionpremio: "Descuento en compras del marketplace", fechavencimiento: new Date("2026-12-31") },
    { _id: new ObjectId(), tipopremio: "Bono Streaming", descripcionpremio: "Crédito para ver partidos en vivo", fechavencimiento: new Date("2027-01-15") },
    { _id: new ObjectId(), tipopremio: "Bono Estadísticas", descripcionpremio: "Bonus por usar análisis avanzados", fechavencimiento: new Date("2027-02-28") },
    { _id: new ObjectId(), tipopremio: "Bono Amigo", descripcionpremio: "Crédito compartido con amigos", fechavencimiento: new Date("2027-03-20") },
    { _id: new ObjectId(), tipopremio: "Bono Temporada", descripcionpremio: "Promoción de temporada deportiva", fechavencimiento: new Date("2027-04-30") },
    { _id: new ObjectId(), tipopremio: "Bono Flash", descripcionpremio: "Oferta rápida por tiempo limitado", fechavencimiento: new Date("2027-05-15") },
    { _id: new ObjectId(), tipopremio: "Bono Comunidad", descripcionpremio: "Recompensa por ser parte de la comunidad", fechavencimiento: new Date("2027-06-30") },
    { _id: new ObjectId(), tipopremio: "Bono Exclusivo Premium", descripcionpremio: "Acceso VIP a todas las promociones", fechavencimiento: new Date("2027-12-31") }
  ];

  await col.insertMany(premios);
  return premios;
};

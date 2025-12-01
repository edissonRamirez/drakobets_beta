module.exports = async function apuestaCasinoSeed(db, usuarios, juegos) {
  const col = db.collection("apuestCasino");

  if (await col.estimatedDocumentCount()) 
  return await col.find().toArray();


  const apuestasCasino = [
    {
      cedulausuario: usuarios[0].cedulausuario,
      idjuego: juegos[0]._id,
      montoapostado: 100,
      resultado: "win",
      fechahora: new Date()
    }
  ];

  await col.insertMany(apuestasCasino);
  return apuestasCasino;
};

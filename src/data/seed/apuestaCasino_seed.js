module.exports = async function apuestaCasinoSeed(db, usuarios, juegos) {
  const col = db.collection("apuestaCasino");

  if (await col.estimatedDocumentCount()) 
  return await col.find().toArray();


  const apuestasCasino = [
    { cedulausuario: usuarios[0].cedulausuario, idjuego: juegos[0]._id, montoapostado: 100, resultado: "win", fechahora: new Date() },
    { cedulausuario: usuarios[1].cedulausuario, idjuego: juegos[1]._id, montoapostado: 110, resultado: "lose", fechahora: new Date(Date.now() - 1*3600000) },
    { cedulausuario: usuarios[2].cedulausuario, idjuego: juegos[2]._id, montoapostado: 120, resultado: "win", fechahora: new Date(Date.now() - 2*3600000) },
    { cedulausuario: usuarios[3].cedulausuario, idjuego: juegos[3]._id, montoapostado: 130, resultado: "lose", fechahora: new Date(Date.now() - 3*3600000) },
    { cedulausuario: usuarios[4].cedulausuario, idjuego: juegos[4]._id, montoapostado: 140, resultado: "win", fechahora: new Date(Date.now() - 4*3600000) },
    { cedulausuario: usuarios[5].cedulausuario, idjuego: juegos[5]._id, montoapostado: 150, resultado: "lose", fechahora: new Date(Date.now() - 5*3600000) },
    { cedulausuario: usuarios[6].cedulausuario, idjuego: juegos[6]._id, montoapostado: 160, resultado: "win", fechahora: new Date(Date.now() - 6*3600000) },
    { cedulausuario: usuarios[7].cedulausuario, idjuego: juegos[7]._id, montoapostado: 170, resultado: "lose", fechahora: new Date(Date.now() - 7*3600000) },
    { cedulausuario: usuarios[8].cedulausuario, idjuego: juegos[8]._id, montoapostado: 180, resultado: "win", fechahora: new Date(Date.now() - 8*3600000) },
    { cedulausuario: usuarios[9].cedulausuario, idjuego: juegos[9]._id, montoapostado: 190, resultado: "lose", fechahora: new Date(Date.now() - 9*3600000) },
    { cedulausuario: usuarios[10].cedulausuario, idjuego: juegos[10]._id, montoapostado: 200, resultado: "win", fechahora: new Date(Date.now() - 10*3600000) },
    { cedulausuario: usuarios[11].cedulausuario, idjuego: juegos[11]._id, montoapostado: 210, resultado: "lose", fechahora: new Date(Date.now() - 11*3600000) },
    { cedulausuario: usuarios[12].cedulausuario, idjuego: juegos[12]._id, montoapostado: 220, resultado: "win", fechahora: new Date(Date.now() - 12*3600000) },
    { cedulausuario: usuarios[13].cedulausuario, idjuego: juegos[13]._id, montoapostado: 230, resultado: "lose", fechahora: new Date(Date.now() - 13*3600000) },
    { cedulausuario: usuarios[14].cedulausuario, idjuego: juegos[14]._id, montoapostado: 240, resultado: "win", fechahora: new Date(Date.now() - 14*3600000) },
    { cedulausuario: usuarios[15].cedulausuario, idjuego: juegos[15]._id, montoapostado: 250, resultado: "lose", fechahora: new Date(Date.now() - 15*3600000) },
    { cedulausuario: usuarios[16].cedulausuario, idjuego: juegos[16]._id, montoapostado: 260, resultado: "win", fechahora: new Date(Date.now() - 16*3600000) },
    { cedulausuario: usuarios[17].cedulausuario, idjuego: juegos[17]._id, montoapostado: 270, resultado: "lose", fechahora: new Date(Date.now() - 17*3600000) },
    { cedulausuario: usuarios[18].cedulausuario, idjuego: juegos[18]._id, montoapostado: 280, resultado: "win", fechahora: new Date(Date.now() - 18*3600000) },
    { cedulausuario: usuarios[19].cedulausuario, idjuego: juegos[19]._id, montoapostado: 290, resultado: "lose", fechahora: new Date(Date.now() - 19*3600000) },
    { cedulausuario: usuarios[20].cedulausuario, idjuego: juegos[20]._id, montoapostado: 300, resultado: "win", fechahora: new Date(Date.now() - 20*3600000) },
    { cedulausuario: usuarios[21].cedulausuario, idjuego: juegos[21]._id, montoapostado: 310, resultado: "lose", fechahora: new Date(Date.now() - 21*3600000) },
    { cedulausuario: usuarios[22].cedulausuario, idjuego: juegos[22]._id, montoapostado: 320, resultado: "win", fechahora: new Date(Date.now() - 22*3600000) },
    { cedulausuario: usuarios[23].cedulausuario, idjuego: juegos[23]._id, montoapostado: 330, resultado: "lose", fechahora: new Date(Date.now() - 23*3600000) },
    { cedulausuario: usuarios[24].cedulausuario, idjuego: juegos[24]._id, montoapostado: 340, resultado: "win", fechahora: new Date(Date.now() - 24*3600000) },
    { cedulausuario: usuarios[25].cedulausuario, idjuego: juegos[25]._id, montoapostado: 350, resultado: "lose", fechahora: new Date(Date.now() - 25*3600000) },
    { cedulausuario: usuarios[26].cedulausuario, idjuego: juegos[26]._id, montoapostado: 360, resultado: "win", fechahora: new Date(Date.now() - 26*3600000) },
    { cedulausuario: usuarios[27].cedulausuario, idjuego: juegos[27]._id, montoapostado: 370, resultado: "lose", fechahora: new Date(Date.now() - 27*3600000) },
    { cedulausuario: usuarios[28].cedulausuario, idjuego: juegos[28]._id, montoapostado: 380, resultado: "win", fechahora: new Date(Date.now() - 28*3600000) },
    { cedulausuario: usuarios[29].cedulausuario, idjuego: juegos[29]._id, montoapostado: 390, resultado: "lose", fechahora: new Date(Date.now() - 29*3600000) },
    { cedulausuario: usuarios[30].cedulausuario, idjuego: juegos[30]._id, montoapostado: 400, resultado: "win", fechahora: new Date(Date.now() - 30*3600000) },
    { cedulausuario: usuarios[31].cedulausuario, idjuego: juegos[31]._id, montoapostado: 410, resultado: "lose", fechahora: new Date(Date.now() - 31*3600000) },
    { cedulausuario: usuarios[32].cedulausuario, idjuego: juegos[32]._id, montoapostado: 420, resultado: "win", fechahora: new Date(Date.now() - 32*3600000) },
    { cedulausuario: usuarios[33].cedulausuario, idjuego: juegos[33]._id, montoapostado: 430, resultado: "lose", fechahora: new Date(Date.now() - 33*3600000) },
    { cedulausuario: usuarios[34].cedulausuario, idjuego: juegos[34]._id, montoapostado: 440, resultado: "win", fechahora: new Date(Date.now() - 34*3600000) },
    { cedulausuario: usuarios[35].cedulausuario, idjuego: juegos[35]._id, montoapostado: 450, resultado: "lose", fechahora: new Date(Date.now() - 35*3600000) },
    { cedulausuario: usuarios[36].cedulausuario, idjuego: juegos[36]._id, montoapostado: 460, resultado: "win", fechahora: new Date(Date.now() - 36*3600000) },
    { cedulausuario: usuarios[37].cedulausuario, idjuego: juegos[37]._id, montoapostado: 470, resultado: "lose", fechahora: new Date(Date.now() - 37*3600000) },
    { cedulausuario: usuarios[38].cedulausuario, idjuego: juegos[38]._id, montoapostado: 480, resultado: "win", fechahora: new Date(Date.now() - 38*3600000) },
    { cedulausuario: usuarios[39].cedulausuario, idjuego: juegos[39]._id, montoapostado: 490, resultado: "lose", fechahora: new Date(Date.now() - 39*3600000) }
  ];

  await col.insertMany(apuestasCasino);
  return apuestasCasino;
};

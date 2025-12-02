module.exports = async function transaccionesSeed(db, usuarios) {
  const col = db.collection("transaccion");

  if (await col.estimatedDocumentCount())  
  return await col.find().toArray();
  const transacciones = [
    { cedulausuario: usuarios[0].cedulausuario, usuario_oid: usuarios[0]._1, monto: 50000, tipotransaccion: "deposito", fechahoratransaccion: new Date(), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[0].cedulausuario, usuario_oid: usuarios[0]._id, monto: 51000, tipotransaccion: "retiro", fechahoratransaccion: new Date(Date.now() - 3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[1].cedulausuario, usuario_oid: usuarios[1]._id, monto: 52000, tipotransaccion: "apuesta", fechahoratransaccion: new Date(Date.now() - 2*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[2].cedulausuario, usuario_oid: usuarios[2]._id, monto: 53000, tipotransaccion: "bono", fechahoratransaccion: new Date(Date.now() - 3*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[3].cedulausuario, usuario_oid: usuarios[3]._id, monto: 54000, tipotransaccion: "deposito", fechahoratransaccion: new Date(Date.now() - 4*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[4].cedulausuario, usuario_oid: usuarios[4]._id, monto: 55000, tipotransaccion: "retiro", fechahoratransaccion: new Date(Date.now() - 5*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[5].cedulausuario, usuario_oid: usuarios[5]._id, monto: 56000, tipotransaccion: "apuesta", fechahoratransaccion: new Date(Date.now() - 6*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[6].cedulausuario, usuario_oid: usuarios[6]._id, monto: 57000, tipotransaccion: "bono", fechahoratransaccion: new Date(Date.now() - 7*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[7].cedulausuario, usuario_oid: usuarios[7]._id, monto: 58000, tipotransaccion: "deposito", fechahoratransaccion: new Date(Date.now() - 8*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[8].cedulausuario, usuario_oid: usuarios[8]._id, monto: 59000, tipotransaccion: "retiro", fechahoratransaccion: new Date(Date.now() - 9*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[9].cedulausuario, usuario_oid: usuarios[9]._id, monto: 60000, tipotransaccion: "apuesta", fechahoratransaccion: new Date(Date.now() - 10*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[10].cedulausuario, usuario_oid: usuarios[10]._id, monto: 61000, tipotransaccion: "bono", fechahoratransaccion: new Date(Date.now() - 11*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[11].cedulausuario, usuario_oid: usuarios[11]._id, monto: 62000, tipotransaccion: "deposito", fechahoratransaccion: new Date(Date.now() - 12*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[12].cedulausuario, usuario_oid: usuarios[12]._id, monto: 63000, tipotransaccion: "retiro", fechahoratransaccion: new Date(Date.now() - 13*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[13].cedulausuario, usuario_oid: usuarios[13]._id, monto: 64000, tipotransaccion: "apuesta", fechahoratransaccion: new Date(Date.now() - 14*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[14].cedulausuario, usuario_oid: usuarios[14]._id, monto: 65000, tipotransaccion: "bono", fechahoratransaccion: new Date(Date.now() - 15*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[15].cedulausuario, usuario_oid: usuarios[15]._id, monto: 66000, tipotransaccion: "deposito", fechahoratransaccion: new Date(Date.now() - 16*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[16].cedulausuario, usuario_oid: usuarios[16]._id, monto: 67000, tipotransaccion: "retiro", fechahoratransaccion: new Date(Date.now() - 17*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[17].cedulausuario, usuario_oid: usuarios[17]._id, monto: 68000, tipotransaccion: "apuesta", fechahoratransaccion: new Date(Date.now() - 18*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[18].cedulausuario, usuario_oid: usuarios[18]._id, monto: 69000, tipotransaccion: "bono", fechahoratransaccion: new Date(Date.now() - 19*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[19].cedulausuario, usuario_oid: usuarios[19]._id, monto: 70000, tipotransaccion: "deposito", fechahoratransaccion: new Date(Date.now() - 20*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[20].cedulausuario, usuario_oid: usuarios[20]._id, monto: 71000, tipotransaccion: "retiro", fechahoratransaccion: new Date(Date.now() - 21*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[21].cedulausuario, usuario_oid: usuarios[21]._id, monto: 72000, tipotransaccion: "apuesta", fechahoratransaccion: new Date(Date.now() - 22*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[22].cedulausuario, usuario_oid: usuarios[22]._id, monto: 73000, tipotransaccion: "bono", fechahoratransaccion: new Date(Date.now() - 23*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[23].cedulausuario, usuario_oid: usuarios[23]._id, monto: 74000, tipotransaccion: "deposito", fechahoratransaccion: new Date(Date.now() - 24*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[24].cedulausuario, usuario_oid: usuarios[24]._id, monto: 75000, tipotransaccion: "retiro", fechahoratransaccion: new Date(Date.now() - 25*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[25].cedulausuario, usuario_oid: usuarios[25]._id, monto: 76000, tipotransaccion: "apuesta", fechahoratransaccion: new Date(Date.now() - 26*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[26].cedulausuario, usuario_oid: usuarios[26]._id, monto: 77000, tipotransaccion: "bono", fechahoratransaccion: new Date(Date.now() - 27*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[27].cedulausuario, usuario_oid: usuarios[27]._id, monto: 78000, tipotransaccion: "deposito", fechahoratransaccion: new Date(Date.now() - 28*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[28].cedulausuario, usuario_oid: usuarios[28]._id, monto: 79000, tipotransaccion: "retiro", fechahoratransaccion: new Date(Date.now() - 29*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[29].cedulausuario, usuario_oid: usuarios[29]._id, monto: 80000, tipotransaccion: "apuesta", fechahoratransaccion: new Date(Date.now() - 30*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[30].cedulausuario, usuario_oid: usuarios[30]._id, monto: 81000, tipotransaccion: "bono", fechahoratransaccion: new Date(Date.now() - 31*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[31].cedulausuario, usuario_oid: usuarios[31]._id, monto: 82000, tipotransaccion: "deposito", fechahoratransaccion: new Date(Date.now() - 32*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[32].cedulausuario, usuario_oid: usuarios[32]._id, monto: 83000, tipotransaccion: "retiro", fechahoratransaccion: new Date(Date.now() - 33*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[33].cedulausuario, usuario_oid: usuarios[33]._id, monto: 84000, tipotransaccion: "apuesta", fechahoratransaccion: new Date(Date.now() - 34*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[34].cedulausuario, usuario_oid: usuarios[34]._id, monto: 85000, tipotransaccion: "bono", fechahoratransaccion: new Date(Date.now() - 35*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[35].cedulausuario, usuario_oid: usuarios[35]._id, monto: 86000, tipotransaccion: "deposito", fechahoratransaccion: new Date(Date.now() - 36*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[36].cedulausuario, usuario_oid: usuarios[36]._id, monto: 87000, tipotransaccion: "retiro", fechahoratransaccion: new Date(Date.now() - 37*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[37].cedulausuario, usuario_oid: usuarios[37]._id, monto: 88000, tipotransaccion: "apuesta", fechahoratransaccion: new Date(Date.now() - 38*3600000), informacionbancaria: "Visa **** 1234" },
    { cedulausuario: usuarios[38].cedulausuario, usuario_oid: usuarios[38]._id, monto: 89000, tipotransaccion: "bono", fechahoratransaccion: new Date(Date.now() - 39*3600000), informacionbancaria: "Mastercard **** 5678" },
    { cedulausuario: usuarios[39].cedulausuario, usuario_oid: usuarios[39]._id, monto: 90000, tipotransaccion: "deposito", fechahoratransaccion: new Date(Date.now() - 40*3600000), informacionbancaria: "Visa **** 1234" }
  ];

  await col.insertMany(transacciones);
  return transacciones;
};

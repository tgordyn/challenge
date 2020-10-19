const { Passenger } = require("./models/index");


const pasajeroUno = Passenger.create({
  name: "Sergio",
  lastname: "Gonzalez",
  numeroVuelo: "AB203",
});

const pasajeroDos = Passenger.create({
  name: "Ana",
  lastname: "Suarez",
  numeroVuelo: "XC555",
});

const pasajeroTres = Passenger.create({
  name: "Luis",
  lastname: "Perez",
  numeroVuelo: "TR678",
});

const pasajeroCuatro = Passenger.create({
  name: "Roman",
  lastname: "Castelli",
  numeroVuelo: "ZZ987",
});

const pasajeroCinco = Passenger.create({
  name: "Tomas",
  lastname: "Rosas",
  numeroVuelo: "JU221",
});

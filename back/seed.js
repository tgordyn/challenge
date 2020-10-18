const { Passenger } = require("./models/index");
const Package = require("./models/index");



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
  
 
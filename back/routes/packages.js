const express = require('express');
const router = express.Router();
const { Passenger, Package } = require('../models');



// Asignar un equipaje a un pasajero y crearlo
// router.post("/", (req, res, next) => {
//     Passenger.findOne({
//       where: {
//         id: req.body.passengerId
//       }
//     })
//       .then(package => {
//         Package.create(req.body).then(packageCreated => {
//           packageCreated.addPackage(package);
//           res.status(201).send(packageCreated);
//         });
//       })
//       .catch(next);
//   });


// Asignar un equipaje a un pasajero y crearlo
  router.post("/", (req, res, next) => {
    Passenger.findOne({
      where: {
        id: req.body.passengerId
      }
    }).then((passenger) => {
      const pasajero = passenger
      Package.create(req.body)
      .then((data)=>{
        //data.setPassenger(req.body.passengerId)  
        res.status(201).send(data)
      })
        .catch(next)
    })
     
});

// Buscar todos los equipajes de un pasajero y eliminarlos

module.exports = router;
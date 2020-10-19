const express = require('express');
const router = express.Router();
const { Passenger, Package } = require('../models');

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
        
        res.status(201).send(data)
      })
        .catch(next)
    })
     
});

// Buscar todos los equipajes de un pasajero y eliminarlos
router.delete("/:id", (req, res, next)=>{
  Package.destroy({
    where:{
      passengerId: Number(req.params.id)
    }
  })
  .then(() => res.sendStatus(200))
  .catch(next)
})


module.exports = router;
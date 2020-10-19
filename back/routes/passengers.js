const express = require('express');
const router = express.Router();
const { Passenger, Package } = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



// Buscar un pasajero por ID
router.get('/:passengerId', (req, res, next) => {
    Passenger.findOne({
      include: [{ model: Package }],  
      where: {
        id: req.params.passengerId
      }
    })
    .then(passenger => {
      res.status(200).send(passenger)
    })
    .catch(next);
  })

// Buscar todos los pasajeros
router.get('/', (req, res, next) => {
    Passenger.findAll()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(next);
  })

// Crear un nuevo pasajero 
router.post("/", (req, res, next) => {
    Passenger.create(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(next);
  });  

 // Borrar un pasajero
 router.delete("/:id", (req, res, next) => {
  Passenger.destroy({ where: { id: Number(req.params.id) } })
    .then(() => res.sendStatus(200))
    .catch(next);
});

module.exports = router;
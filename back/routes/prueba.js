const express = require('express');
const router = express.Router();
const { Passenger, Package } = require('../models/index');

// Crear un nuevo pasajero 
router.post("/", (req, res, next) => {
    Passenger.create(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(next);
  });  

  module.exports = router;
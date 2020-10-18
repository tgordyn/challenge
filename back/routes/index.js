const express = require('express');
const router = express.Router();

const passengersRoutes = require('./passengers');
const packagesRoutes = require('./packages');
const pruebaRoutes = require("./prueba")

router.use('/passengers', passengersRoutes)
router.use('/packages', packagesRoutes)
router.use("/prueba", pruebaRoutes)


module.exports = router;
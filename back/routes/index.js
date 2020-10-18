const express = require('express');
const router = express.Router();

const passengersRoutes = require('./passengers');
const packagesRoutes = require('./packages');


router.use('/passengers', passengersRoutes)
router.use('/packages', packagesRoutes)



module.exports = router;
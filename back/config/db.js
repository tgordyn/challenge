const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/challenge',{
    logging:false,
    dialect:'postgres'
})

module.exports = db
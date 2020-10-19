const Passenger = require('./passengers');
const Package = require('./packages')

Passenger.hasMany(Package);

module.exports = {Passenger, Package}
const Passenger = require('./passengers');
const Package = require('./packages')

//Package.belongsTo(Passenger);
Passenger.hasMany(Package);

module.exports = {Passenger, Package}
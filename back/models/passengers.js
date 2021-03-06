const S = require("sequelize");
const db = require("../config/db");


class Passengers extends S.Model {}

Passengers.init({

    name:{
        type:S.STRING,
        allowNull:false,
        
    },
    lastname:{
        type:S.STRING,
        allowNull:false,
        
    },
    numeroVuelo:{
        type:S.STRING,
        allowNull:false,
        validate: {
            len: 5
          }    
    }
  },
  {
    sequelize: db,
    modelName: "passenger",
  }
);

module.exports = Passengers;
const S = require("sequelize");
const db = require("../config/db");


class Packages extends S.Model {}

Packages.init({

    category:{
        type:S.ENUM,
        values: ['grande', 'pequeño', 'prenda'],
        allowNull:false,   
    },
   
  },
  {
    sequelize: db,
    modelName: "package",
  }
);

module.exports = Packages;
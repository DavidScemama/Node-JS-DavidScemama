const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Owner extends Model {}

Owner.init(
  {
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Owner",
  }
);

module.exports = Owner;
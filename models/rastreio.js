'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rastreio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rastreio.belongsTo(models.User);
      Rastreio.hasMany(models.Product);
    }
  };
  Rastreio.init({
    code: DataTypes.STRING,
    local: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rastreio',
  });
  return Rastreio;
};
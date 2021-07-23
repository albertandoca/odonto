'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Direccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Persona, {
        foreignKey: 'idPersona'
      })
    }
  }
  Direccion.init({
    principal: DataTypes.STRING,
    secundaria: DataTypes.STRING,
    lote: DataTypes.STRING,
    tipo: DataTypes.STRING,
    sector: DataTypes.STRING,
    observaciones: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Direccion',
  });
  return Direccion;
};
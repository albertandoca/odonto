'use strict';
const {
  Model
} = require('sequelize');
const persona = require('./persona');
module.exports = (sequelize, DataTypes) => {
  class Telefono extends Model {
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
  };
  Telefono.init({
    codigo: DataTypes.STRING,
    numero: DataTypes.STRING,
    operadora: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Telefono',
  });
  
  return Telefono;
};
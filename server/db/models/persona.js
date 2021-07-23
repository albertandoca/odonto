'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Telefono, {
        foreignKey: 'idPersona'
      })
      this.hasMany(models.Rol, {
        foreignKey: 'idPersona'
      })
      this.hasMany(models.Personal, {
        foreignKey: 'idPersona'
      })
      this.hasMany(models.Medicamento, {
        foreignKey: 'idPersona'
      })
      this.hasMany(models.Direccion, {
        foreignKey: 'idPersona'
      })
      this.hasMany(models.Consulta, {
        foreignKey: 'idPersona'
      })
      this.hasMany(models.Antecedente, {
        foreignKey: 'idPersona'
      })
    }
  }
  Persona.init({
    identificacion: DataTypes.STRING,
    primerNombre: DataTypes.STRING,
    segundoNombre: DataTypes.STRING,
    apellidoPaterno: DataTypes.STRING,
    apellidoMaterno: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    email: DataTypes.STRING,
    foto: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Persona',
  });
 
  return Persona;
};
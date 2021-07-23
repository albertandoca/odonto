'use strict';

let bcrypt = require('bcrypt-nodejs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personal extends Model {
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
  Personal.init({
    semilla: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Personal',
  });

  Personal.beforeSave((personal, options) => {
    if (personal.changed('semilla')) {
      personal.semilla = bcrypt.hashSync(personal.semilla, bcrypt.genSaltSync(10), null);
    }
  });

  Personal.beforeUpdate((personal, options) => {
    if (personal.changed('semilla')) {
      personal.semilla = bcrypt.hashSync(personal.semilla, bcrypt.genSaltSync(10), null);
    }
  });

  Personal.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.semilla, function (err, isMatch) {
      if (err) {
        return cb(err)
      }
      cb(null, isMatch);
    })
  };

  return Personal;
};
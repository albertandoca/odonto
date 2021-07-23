'use strict';
let bcrypt = require('bcrypt-nodejs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Personals', [
      {
        idPersona: 1,
        semilla: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        estado: 'Activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 2,
        semilla: bcrypt.hashSync('12345679', bcrypt.genSaltSync(10), null),
        estado: 'Activo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Personals', null, {});
  }
};

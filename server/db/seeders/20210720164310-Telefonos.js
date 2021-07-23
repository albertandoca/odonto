'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Telefonos', [
      {
        idPersona: 1,
        codigo: '+593',
        numero: '988044773',
        operadora: 'Claro',
        tipo: 'Móvil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 1,
        codigo: '+593',
        numero: '988044774',
        operadora: 'CNT',
        tipo: 'Móvil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 2,
        codigo: '+593',
        numero: '988044555',
        operadora: 'Claro',
        tipo: 'Móvil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 2,
        codigo: '+593',
        numero: '988044555',
        operadora: 'Claro',
        tipo: 'Móvil',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Telefonos', null, {});
  }
};

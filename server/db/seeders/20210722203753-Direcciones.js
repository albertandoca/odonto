'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Direccions', [
      {
        idPersona: 1,
        principal: 'Calle A',
        secundaria: 'Calle B trasnversal',
        lote: 'EO-234',
        tipo: 'Casa primer piso',
        sector: 'Conocoto',
        observaciones: 'Ninguna',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 1,
        principal: 'Calle A',
        secundaria: 'Calle B trasnversal',
        lote: 'EO-234',
        tipo: 'Casa primer piso',
        sector: 'Conocoto',
        observaciones: 'Ninguna',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 2,
        principal: 'Calle A',
        secundaria: 'Calle B trasnversal',
        lote: 'EO-234',
        tipo: 'Casa primer piso',
        sector: 'Conocoto',
        observaciones: 'Ninguna',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Direccions', null, {});
  }
};

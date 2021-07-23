'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Medicamentos', [
      {
        idPersona: 1,
        descripcion: 'Propanolol',
        estado: 'Antivo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Medicamentos', null, {});
    
  }
};

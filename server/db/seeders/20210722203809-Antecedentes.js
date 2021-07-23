'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Antecedentes', [
      {
        idPersona: 1,
        tipo: 'Alergia',
        descripcion: 'Al camarón',
        estado: 'Activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 1,
        tipo: 'Hemorragia',
        descripcion: 'Sangre muy pesada',
        estado: 'Activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPersona: 2,
        tipo: 'Enfermedad',
        descripcion: 'Presión alta',
        estado: 'Activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Antecedentes', null, {});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Personas', [
       {
        identificacion: '1713121810',
        primerNombre: 'Carlos',
        segundoNombre: 'Alberto',
        apellidoPaterno: 'Andocilla',
        apellidoMaterno: 'Andrade',
        fechaNacimiento: new Date(),
        email: 'albertandoca@gmail.com',
        foto: 'una foto',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        identificacion: '1713121811',
        primerNombre: 'Carlos1',
        segundoNombre: 'Alberto1',
        apellidoPaterno: 'Andocilla1',
        apellidoMaterno: 'Andrade1',
        fechaNacimiento: new Date(),
        email: 'albertandoca1@gmail.com',
        foto: 'una foto1',
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
       }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Personas', null, {});
  }
};

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      identificacion: {
        allowNull: false,
        type: Sequelize.STRING
      },
      primerNombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      segundoNombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellidoPaterno: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellidoMaterno: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fechaNacimiento: {
        allowNull: false,
        type: Sequelize.DATE
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      foto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      estado: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Personas');
  }
};
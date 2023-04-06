import { QueryInterface, Sequelize } from "sequelize"
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface: QueryInterface, _Sequelize: Sequelize) {
    await queryInterface.bulkInsert('departments', [
    {
     department_name: 'Administrativo',
    },
    {
     department_name: 'TI',
    },
    {
     department_name: 'Suporte',
    }
  ], {});
  },

  async down (queryInterface: QueryInterface, _Sequelize: Sequelize) {
    await queryInterface.bulkDelete('departments', {});
  }
};

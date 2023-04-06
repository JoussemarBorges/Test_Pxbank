'use strict';

import { QueryInterface, Sequelize } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, _Sequelize: Sequelize) {
    await queryInterface.bulkInsert('employees', [
    {
      id: 1,
      employee_name: "Paulo Augusto",
      cpf: "000.000.000-01",
      wage: 2500.00,
      date_of_birth: "1999-05-15",
      department_id: 1,
    },
    {
      id: 2,
      employee_name: "Camila Pereira",
      cpf: "000.000.000-02",
      wage: 2000.00,
      date_of_birth: "1987-02-10",
      department_id: 3,
    }
  ], {});
  },

  async down (queryInterface: QueryInterface, _Sequelize: Sequelize) {
    await queryInterface.bulkDelete('employees', {});
  }
};

'use strict';

import { QueryInterface, Sequelize, INTEGER, DATE, STRING, DECIMAL } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, _Sequelize: Sequelize) {
   await queryInterface.createTable('employees', {
     id: {
      type: INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    employee_name: {
      type: STRING,
      allowNull: false,
    },
    cpf: {
      type: STRING,
      allowNull: false,
    },
    wage: {
      type: DECIMAL(6,2),
      allowNull: false,
    },
    date_of_birth: {
      type: DATE,
      allowNull: false,
    },
    department_id: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'departments',
        key: 'id'
      }
    },    
    });
  },

  async down (queryInterface: QueryInterface, _Sequelize: Sequelize) {
   await queryInterface.dropTable('employees');
  }
};

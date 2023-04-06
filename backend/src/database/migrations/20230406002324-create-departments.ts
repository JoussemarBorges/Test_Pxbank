'use strict';

import { QueryInterface, Sequelize, INTEGER, STRING } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, _Sequelize: Sequelize) {
    await queryInterface.createTable('departments', { 
      id: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      department_name: {
        type: STRING,
        allowNull: false,
      }
    });
  },

  async down (queryInterface: QueryInterface, _Sequelize: Sequelize) {
    await queryInterface.dropTable('departments');
  }
};

'use strict';

import { QueryInterface, Sequelize, INTEGER, STRING } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, _Sequelize: Sequelize) {
    await queryInterface.createTable('departaments', { 
      id: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      departament_name: {
        type: STRING,
        allowNull: false,
      }
    });
  },

  async down (queryInterface: QueryInterface, _Sequelize: Sequelize) {
    await queryInterface.dropTable('departaments');
  }
};

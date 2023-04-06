import {Options} from 'sequelize'
const jsonConfig: Options = {
    username: "root",
    password: 'rootPassword',
    database: "pxbank",
    host: "127.0.0.1",
    dialect: "mysql",
    dialectOptions: {
      timezone: 'Z'
    },
    port: 3003
  };
  
  export = {
    production: jsonConfig,
    development: jsonConfig,
  }
  

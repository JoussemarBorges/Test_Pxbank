import {Options} from 'sequelize'
const jsonConfig: Options = {
    username: process.env.MYSQLUSER || "root",
    password: process.env.MYSQLPASSWORD ||'rootPassword',
    database: process.env.MYSQLDATABASE ||"pxbank",
    host: process.env.MYSQLHOST || "127.0.0.1",
    dialect: "mysql",
    dialectOptions: {
      timezone: 'Z'
    },
    port: Number(process.env.MYSQLPORT) || 3003
  };
  
  export = {
    production: jsonConfig,
    development: jsonConfig,
  }
  

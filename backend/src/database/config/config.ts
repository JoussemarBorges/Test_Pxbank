
const jsonConfig = {
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

export default {
  production: jsonConfig,
  development: jsonConfig,
  test: jsonConfig,
}


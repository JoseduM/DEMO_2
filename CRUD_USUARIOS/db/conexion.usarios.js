const Sequelize = require('sequelize');

/*
const sequelize = new Sequelize('usersdb', null, null, {
  dialect: 'mssql',
  server: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialectOptions: {
    authentication: {
      type: 'default',
      options: {
        encrypt: true,
        userName: process.env.DB_USR,
        password: process.env.DB_PASS
      }
    },
  }
})

module.exports = sequelize;*/

const sequelize = new Sequelize('usersdb',process.env.DB_USR,process.env.DB_PASS,{
  dialect: 'mssql',
  server: process.env.DB_HOST,
  port: process.env.DB_PORT
})

module.exports = sequelize ;
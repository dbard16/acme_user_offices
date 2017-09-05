const Sequelize = require('sequelize');

const conn = new Sequelize('postgres://localhost/acmeuserofficedb', {
  logging: false
});


module.exports = conn;


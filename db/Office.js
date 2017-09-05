const Sequelize = require('sequelize');
const conn = require('./conn');

const Office = conn.define('office', {
  name: Sequelize.STRING,
  lat: Sequelize.FLOAT,
  lng: Sequelize.FLOAT
})

module.exports = Office

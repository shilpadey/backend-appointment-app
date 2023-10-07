const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointment-app', 'root', 'hsrokz786', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
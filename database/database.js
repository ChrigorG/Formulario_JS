const Sequelize = require("sequelize");

const connection = new Sequelize("guiaperguntas", "root", "L@zag1228", {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
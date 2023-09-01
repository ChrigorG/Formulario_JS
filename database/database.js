const Sequelize = require("sequelize");

const connection = new Sequelize("guiaperguntas", "root", "sua-senha", {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
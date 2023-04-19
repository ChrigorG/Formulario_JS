//Model -> Representação de uma tabela resposta
const sequelize = require("sequelize");
const conexao = require("./database");

const resposta = conexao.define("resposta", {
    resposta: {
        type: sequelize.TEXT,
        allowNull: false
    },
    //Chave estrangeira
    perguntaID: {
        type: sequelize.INTEGER,
        allowNull: false
    }
});

// Sincronizar com o banco e não forçar a criação da tabela de estiver criada
resposta.sync({force: false}).then(() =>{});

module.exports = resposta;

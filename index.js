const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Database
// Buscando a exportação da conexão 
const connection = require("./database/database"); 
const perguntaModel = require("./database/perguntas");
const respostaModel = require("./database/respostas");
const { Sequelize } = require("sequelize");
const resposta = require("./database/respostas");

connection.authenticate().then(() =>{
    console.log('Conectado ao banco de dados');
}).catch((msgErro) =>{
    console.log(msgErro);
});

//Pega os dados do formulario e transforma em uma estrutura javascript
// --> instalado via cmd: npm install body-parser --save 
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

// Nosso motor de HTML, para express
app.set('view engine', 'ejs');
app.use(express.static('public')); //Declaração do app.use para usar arquivos externos (JS, CSS, etc)

app.get('/',(req, resp) => {
    //raw:true serve para mandar somente os dados e a coluna do DataSet
    // asc = Crescente || desc = Decrescente
     perguntaModel.findAll({raw : true,
        order : [
            ['id','desc'] 
        ]
    }).then(perguntas =>{
        resp.render('index', {  //Passando os dados do back para o front (index seria a pag index)
            perguntas: perguntas
        });
    });
});

app.get('/perguntas', (req, resp) => {
    resp.render('perguntas');
});

app.post('/SaveQuestions', (req, resp) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    // res.send(`Dados do formulário salvos Titulo: ${titulo}  descrição: ${descricao}`);
    perguntaModel.create({
        titulo: titulo,
        descricao: descricao
    }).then(() =>{
        resp.redirect("/");
    });
});

app.get('/viewperguntas/:id', (req, resp) => {
    const id = req.params.id;
    perguntaModel.findOne({
        where: {id: id}
    }).then(perguntas => {
        if(perguntas != undefined){
            respostaModel.findAll({
                where: {perguntaID: id}
            }).then(respostas => {    
                resp.render('viewperguntas', {
                    perguntas: perguntas,
                    respostas: respostas
                });
            });

        }else{
            resp.redirect('/');
        }
    });
});

app.post('/responder', (req, resp) => {
    const resposta = req.body.resposta;
    const perguntaID = req.body.perguntaID;

    respostaModel.create({
        resposta: resposta,
        perguntaID: perguntaID 
    }).then(() => {
        resp.redirect("/viewperguntas/" + perguntaID);
    });
});

app.listen(8080,() => {
    console.log("Aplicação ativa! FormularioJS");
});
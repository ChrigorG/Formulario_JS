const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//Database
const connection = require("./database/database"); // Buscando a exportação da conexão 
const perguntaModel = require("./database/perguntas");

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
  //raw:true serve para mandar somente os dados e a coluno do banco
  perguntaModel.findAll({raw : true}).then(perguntas =>{
    resp.render('index', {  //Passando os dados do back para o front
      perguntas:perguntas
    });
  });
});

app.get('/perguntas', (req, resp) => {
  resp.render('perguntas');
});

app.post('/SaveQuestions', (req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
 // res.send(`Dados do formulário salvos Titulo: ${titulo}  descrição: ${descricao}`);
 perguntaModel.create({
  titulo: titulo,
  descricao: descricao
 }).then(() =>{
  res.redirect("/");
 })
});


app.listen(8080,() => {
  console.log("Aplicação ativa! FormularioJS");
});
# Pergunta e Resposta

Projeto pessoal.

Este é um projeto de perguntas e respostas entre a comunidade, similar ao Stack OverFlow, ao qual possa interagir com outros usuários, criando perguntas sobre um determinado assunto e outras pessoas, dando dicas ou respostas.

![Pergunta e resposta](https://github.com/ChrigorG/Pergunta-e-Resposta/assets/99369312/1699827d-da2f-46f4-b86d-d6f3ac6589cb)

## Desenvolvimento

Como base para o projeto, foi se utilizado
  - Node.JS


Para criar portas e rotas, usado o 
  - framework Express.JS
    
que fornece recursos mínimos para construção de servidores web.
  
Por continuidade, uso do banco relacional
  - MySQL
    
com integração da
  - ORM Sequelize
    
para criar as MODEL e fazer integração com o Banco de Dados.
Além disto, usado a engine EJS junto com o JavaScript para renderizar as páginas HTML e, Front-End feito usando a estrutura do

  - Bootstrap.

## Modo de uso:
1º Faça um clone do projeto

2º Abra em sua IDE favorita

3º Dentro do projeto, no terminal, execute o camando npm install para instalar as dependências

4º Em seu SGBD, crie um banco chamado guiaperguntas (certifique no arquivo /database/database.js se seus dados do MySQL confere com o seu).

5º No terminal novamente, execute o comando **nodemon app.js** ou **node app.js** para inicializar o servidor, Pronto!!

6º Abra seu navegador na URL: http://localhost:8084/

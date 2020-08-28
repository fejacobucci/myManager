/// Encapsulamento dse modulos

require("marko/node-require").install();
require("marko/express");

const express = require("express");
const rotas = require("../app/rotas/rotas"); //Define o caminho para as Rotas da aplicacao.
const bodyParser = require("body-parser");

//Devolvendo o objeto para uso.
module.exports = function () {

    let app = express();

    //Variável Estática
    app.use("/estatico", express.static("src/app/public"));

    //Middleware
    app.use(bodyParser.urlencoded({ extended: true }));

    rotas(app); //Chama Rotas passando app como parametro.   

    return app;
};
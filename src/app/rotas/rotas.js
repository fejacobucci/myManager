const { check, validationResult } = require('express-validator/check');
const DataAccess = require("../infra/BancoDeHoras-DAO");
const dbE = require("../../config/BancoDeHoras");

module.exports = (app) => {

    //Cosntante para uso do banco de dados
    //utilizar a variável dataAccess para consultas do banco de dados
    const dataAccess = new DataAccess(dbE);

    app.get('/', function (req, res) {
		require("../views/registraHora.marko");
    });
    

}
const { check, validationResult } = require('express-validator');
const DataAccess = require("../infra/BancoDeHorasDAO");
const dbE = require("../../config/BancoDeHoras");

class HoraControlador{

    static rotas(){
        return{
            home: '/',
            login: '../views/login.marko',
            apontamento:'../views/horas/registraHora.marko'
        };
    }

    login(){
        return function (req, res) {
            res.marko(require(HoraControlador.rotas().login));
        };
    }

    apontamento() {
        return function (req, res) {
            res.marko(require(HoraControlador.rotas().apontamento));
        };
    }

}
module.exports = HoraControlador
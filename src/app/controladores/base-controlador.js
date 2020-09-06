const { check, validationResult } = require('express-validator');
const DataAccess = require("../infra/BancoDeHorasDAO");
const dbE = require("../../config/BancoDeHoras");

class BaseControlador {

    static funcionalidade() {
        return {
            home:'/',
            login: '/login'
        };
    }

    static rotas() {
        return {
            home: '/',
            login: '../views/login.marko'
        };
    }

    login() {
        return function (req, res) {
            res.marko(require(BaseControlador.rotas().login));
        };
    }

}
module.exports = BaseControlador;

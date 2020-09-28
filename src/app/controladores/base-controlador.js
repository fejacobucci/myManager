const { check, validationResult } = require('express-validator');
const DataAccess = require("../infra/BancoDeHorasDAO");
const dbE = require("../../config/DataBaseConfiguration");

class BaseControlador {

    static funcionalidade() {
        return {
            base:'/',
            home:'/home',
            login:'/login'

        };
    }

    static rotas() {
        return {
            base:'../views/home.marko',
            home:'../views/home.marko',
            login:'../views/login.marko'
        };
    }

    base() {
        return function (req, res) {
            res.marko(require(BaseControlador.rotas().base));
        };
    }
    home() {
        return function (req, res) {
            res.marko(require(BaseControlador.rotas().home));
        };
    }
    login() {
        return function (req, res) {
            res.marko(require(BaseControlador.rotas().login));
        };
    }

}
module.exports = BaseControlador;

const { check, validationResult } = require('express-validator');
const DataAccess = require("../infra/BancoDeHorasDAO");
const dbE = require("../../config/BancoDeHoras");

class ProjetoControlador {

    static funcionalidade() {
        return {
            novoProjeto: '/novoProjeto'
        };
    }

    static rotas() {
        return {
            novoProjeto: '../views/projetos/novoProjeto.marko'
        };
    }

    novoProjeto() {
        return function (req, res) {
            res.marko(require(ProjetoControlador.rotas().novoProjeto));
        };
    
    }

}
module.exports = ProjetoControlador;
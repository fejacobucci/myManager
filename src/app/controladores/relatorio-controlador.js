const { check, validationResult } = require('express-validator');
const DataAccess = require("../infra/ProjetosDAO");
const dbE = require("../../config/DataBaseConfiguration");

class RelatorioControlador {

    static funcionalidade() {
        return {
            relatorios: '/relatorios'
        };
    }

    static rotas() {
        return {
            relatorios: '../views/relatorios/relatorios.marko'
        };
    }

    relatorios() {
        return function (req, res) {
            console.log('Abrindo relatórios');
            res.marko(require(RelatorioControlador.rotas().relatorios));
        };    
    }

}
module.exports = RelatorioControlador;
const { check, validationResult } = require('express-validator');
const DataAccess = require("../infra/BancoDeHorasDAO");
const dbE = require("../../config/BancoDeHoras");

class HoraControlador{

    static funcionalidade() {
        return {
            apontamento: '/apontamento'
        };
    }

    static rotas(){
        return{
            apontamento:'../views/horas/registraHora.marko'
        };
    }

    apontamento() {
        return function (req, res) {
            res.marko(require(HoraControlador.rotas().apontamento));
        };
    }

}
module.exports = HoraControlador;
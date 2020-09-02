const { check, validationResult } = require('express-validator');
const DataAccess = require("../infra/BancoDeHorasDAO");
const dbE = require("../../config/BancoDeHoras");

class HoraControlador{

    static rotas(){
        return{
            home:'/',
            apontamento:'../views/registraHora.marko'
        };
    }

    apontamento(){

        return function (req, res) {
            res.marko(require(HoraControlador.rotas().apontamento));
        };
    }

}
module.exports = HoraControlador
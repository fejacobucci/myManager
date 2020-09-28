const { check, validationResult } = require('express-validator');
const DataAccess = require("../infra/HorasDAO");
const dbE = require("../../config/DataBaseConfiguration");

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
        return function(req, resp) {
            console.log('Abrindo a página de apontamento de horas');
            var auxProjetos = '';
            var auxAtividades = '';
            const horasDao = new DataAccess(dbE);

            horasDao.listaProjetos().then(projetos =>
            horasDao.listaAtividades().then(atividades =>
                resp.marko(
                    require(HoraControlador.rotas().apontamento),
                    {
                        projetos: projetos,
                        atividades: atividades
                    }
                )
            ));
            
            
                    
            
        };
    }

}
module.exports = HoraControlador;
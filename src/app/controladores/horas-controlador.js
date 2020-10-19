const DataAccess = require("../infra/HorasDAO");
const ClientAccess = require("../infra/ClientesDAO");
const dbE = require("../../config/DataBaseConfiguration");

const modelos = require('../views/templates');

class HoraControlador {
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
            const horasDao = new DataAccess(dbE);
            const clientesDao = new ClientAccess(dbE);

            clientesDao.listaClientes().then(clientes =>
            horasDao.listaProjetos().then(projetos =>
            horasDao.listaAtividades().then(atividades =>
                resp.marko(
                    require(HoraControlador.rotas().apontamento),
                    {
                        clientes: clientes,
                        projetos: projetos,
                        atividades: atividades
                    }
                )
            )));
            
            
                    
            
        };
    }

}
module.exports = HoraControlador;
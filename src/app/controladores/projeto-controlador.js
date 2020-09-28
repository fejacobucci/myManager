const { check, validationResult } = require('express-validator');
const DataAccess = require("../infra/ProjetosDAO");
const dbE = require("../../config/DataBaseConfiguration");

class ProjetoControlador {

    static funcionalidade() {
        return {
            novoProjeto: '/novoProjeto',
            listaProjetos: '/listaProjetos'
        };
    }

    static rotas() {
        return {
            novoProjeto: '../views/projetos/novoProjeto.marko',
            listaProjetos: '../views/projetos/listaProjetos.marko'
        };
    }

    novoProjeto() {
        return function (req, res) {
            console.log('Abrindo novo projeto');
            res.marko(require(ProjetoControlador.rotas().novoProjeto));
        };
    
    }

    
    listaProjetos() {
        return function(req, resp) {

            const projetosDao = new DataAccess(dbE);

            projetosDao.listaProjetos()
                    .then(projetos => resp.marko(
                        require(ProjetoControlador.rotas().listaProjetos),
                        {
                            projetos: projetos
                        }
                    ))
                    .catch(erro => console.log(erro));
        };
    }

    

}
module.exports = ProjetoControlador;
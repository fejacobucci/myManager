const { validationResult } = require('express-validator/check');

const DataAccess = require("../infra/ProjetosDAO");
const ClientAccess = require("../infra/ClientesDAO");
const dbE = require("../../config/DataBaseConfiguration");

const modelos = require('../views/templates');

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

            const clientesDao = new ClientAccess(dbE);

            clientesDao.listaClientes()
                .then(clientes => res.marko(
                    require(ProjetoControlador.rotas().novoProjeto),
                    {
                        clientes: clientes
                    }
                )
            )};
    
    }

    
    listaProjetos() {
        return function(req, resp) {

            const projetosDao = new DataAccess(dbE);
            

            projetosDao.listaTarefas()
            .then(projetosDao.listaProjetos()
                    .then(projetos => resp.marko(
                        require(ProjetoControlador.rotas().listaProjetos),
                        {
                            projetos: projetos
                        }
                    )))
                    .catch(erro => console.log(erro));
        };
    }

    cadastrarProjeto() {
        return function (req, res) {
            console.log('SUBMIT: Rota de cadastro de projeto(POST)');
            const projetosDao = new DataAccess(dbE);
            projetosDao.cadastraProjeto(req.body)
                .then(res.redirect(ProjetoControlador.funcionalidade().listaProjetos))
                .catch(erro=> console.log(erro))
            };
    }

}
module.exports = ProjetoControlador;
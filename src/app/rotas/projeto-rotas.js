/// OBS: ROTAS ENCAPSULADAS NOS CONTROLADORES
//Requerimentos de controladores
console.log('CARREGANDO CONTROLADOR PROJETOS');
const ProjetoControlador = require('../controladores/projeto-controlador');

//Constantes de controle
const projetoControlador = new ProjetoControlador();

//Modelos validadores
const ProjetoValidador = require('../modelos/projetos');

//Caminhos
module.exports = (app) => {
    //Constantes que portam apenas rotas dos controladores
    const rotasProjetos = ProjetoControlador.funcionalidade();

    //Montagem de rotas de projetos
    app.route(rotasProjetos.novoProjeto)
        .get(projetoControlador.novoProjeto())
        .post(ProjetoValidador.validacoes(), projetoControlador.cadastrarProjeto())
        .put(projetoControlador.novoProjeto());

    app.get(rotasProjetos.listaProjetos, projetoControlador.listaProjetos());

}
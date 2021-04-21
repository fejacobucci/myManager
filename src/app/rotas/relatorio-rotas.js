/// OBS: ROTAS ENCAPSULADAS NOS CONTROLADORES
//Requerimentos de controladores
console.log('CARREGANDO CONTROLADOR PROJETOS');
const RelatorioControlador = require('../controladores/relatorio-controlador');

//Constantes de controle
const relatorioControlador = new RelatorioControlador();

//Modelos validadores
//const RelatorioValidador= require('../modelos/relatorio');

//Caminhos
module.exports = (app) => {
    //Constantes que portam apenas rotas dos controladores
    const rotasRelatorio = ProjetoControlador.funcionalidade();

    //Montagem de rotas de projetos
    app.route(rotasRelatorio.relatorios)
        .get(relatorioControlador.relatorios());
}
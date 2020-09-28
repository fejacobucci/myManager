/// OBS: ROTAS ENCAPSULADAS NOS CONTROLADORES
//Requerimentos de controladores
const BaseControlador = require('../controladores/base-controlador');
const HoraControlador = require('../controladores/horas-controlador');
const ProjetoControlador = require('../controladores/projeto-controlador');
const RelatorioControlador = require('../controladores/relatorio-controlador');

//Constantes de controle
const baseControlador = new BaseControlador();
const horaControlador = new HoraControlador();
const projetoControlador = new ProjetoControlador();
const relatorioControlador = new RelatorioControlador();

//Caminhos
module.exports = (app) => {
    
    //Constantes que portam apenas rotas dos controladores
    const rotasBase = BaseControlador.funcionalidade();
    const rotasHora = HoraControlador.funcionalidade();
    const rotasProjetos = ProjetoControlador.funcionalidade();
    const rotasRelatorios = RelatorioControlador.funcionalidade();

    /// A partir daqui vem as declaracoes de rotas de paginacao
    app.get(rotasBase.base, baseControlador.base());
    app.get(rotasBase.home, baseControlador.home());
    
    //Montagem de rotas de apontamento de horas
    app.get(rotasHora.apontamento, horaControlador.apontamento());
    
    //Montagem de rotas de projetos
    app.get(rotasProjetos.novoProjeto, projetoControlador.novoProjeto());
    app.get(rotasProjetos.listaProjetos, projetoControlador.listaProjetos());

    //Montagem de rotas de relatórios
    app.get(rotasRelatorios.relatorios, relatorioControlador.relatorios());

}
/// OBS: ROTAS ENCAPSULADAS NOS CONTROLADORES
//Requerimentos de controladores
const BaseControlador = require('../controladores/base-controlador');
const HoraControlador = require('../controladores/horas-controlador');
const ProjetoControlador = require('../controladores/projeto-controlador');

//Constantes de controle
const baseControlador = new BaseControlador();
const horaControlador = new HoraControlador();
const projetoControlador = new ProjetoControlador();

//Caminhos
module.exports = (app) => {

    //Constantes que portam apenas rotas dos controladores
    const rotasBase = BaseControlador.funcionalidade();
    const rotasHora = HoraControlador.funcionalidade();
    const rotasProjetos = ProjetoControlador.funcionalidade();


    /// A partir daqui vem as declarações de rotas de paginacao
    app.get(rotasBase.home, baseControlador.login());
    app.get(rotasHora.apontamento, horaControlador.apontamento());
    app.get(rotasProjetos.novoProjeto, projetoControlador.novoProjeto());
    

}
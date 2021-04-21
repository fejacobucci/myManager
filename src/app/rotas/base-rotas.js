/// OBS: ROTAS ENCAPSULADAS NOS CONTROLADORES
//Requerimentos de controladores
console.log('CARREGANDO CONTROLADOR BASE');
const BaseControlador = require('../controladores/base-controlador');

//Constantes de controle
const baseControlador = new BaseControlador();

//Modelos validadores
//const LoginValidator = require('../modelos/login');

//Caminhos
module.exports = (app) => {
    //Constantes que portam apenas rotas dos controladores
    const rotasBase = BaseControlador.funcionalidade();
    /// A partir daqui vem as declaracoes de rotas de paginacao
    app.get(rotasBase.base, baseControlador.base());
    app.get(rotasBase.home, baseControlador.home());

    app.route(rotasBase.login)
        .get(baseControlador.login())
        .post(baseControlador.efetuaLogin());

}
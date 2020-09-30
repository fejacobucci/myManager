/// OBS: ROTAS ENCAPSULADAS NOS CONTROLADORES
//Requerimentos de controladores
const HoraControlador = require('../controladores/horas-controlador');

//Constantes de controle
const horaControlador = new HoraControlador();


//Caminhos
module.exports = (app) => {
    
    //Constantes que portam apenas rotas dos controladores
    const rotasHora = HoraControlador.funcionalidade();

    
    //Montagem de rotas de apontamento de horas
    app.get(rotasHora.apontamento, horaControlador.apontamento());

}
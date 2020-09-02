const HoraControlador = require('../controladores/horas-controlador');
const horaControlador = new HoraControlador();

module.exports = (app) => {
  const rotasBase = HoraControlador.rotas();

  app.get(rotasBase.home, horaControlador.apontamento());
    

}
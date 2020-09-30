const baseRotas = require('./base-rotas');
const projetoRotas = require('./projeto-rotas');
const horaRotas = require('./horas-rotas');

module.exports = (app) => {
    baseRotas(app);
    projetoRotas(app);
    horaRotas(app);
};
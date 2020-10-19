/// Desenvolvdor: FELIPE DE F. JACOBUCCI
///      Contato: f.jacobucci@gmail.com

/// Descricao: Arquivo de inicializacao do servidor

const porta = 3000;
/**
 * STRING format method
 */
String.prototype.format||(String.prototype.format=function(){let o=arguments;return this.replace(/{(\d+)}/g,function(t,r){return void 0!==o[r]?o[r]:t})});

const app = require("./src/config/custom-express")();
console.log('SERVIDOR RODANDO NA PORTA: ' + porta);
app.listen(porta);
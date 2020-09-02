/// Desenvolvdor: FELIPE DE F. JACOBUCCI
///      Contato: f.jacobucci@gmail.com

/// Descricao: Arquivo de inicializacao do servidor

let porta = 3000;

/**
 * STRING format method
 */
String.prototype.format||(String.prototype.format=function(){let o=arguments;return this.replace(/{(\d+)}/g,function(t,r){return void 0!==o[r]?o[r]:t})});

let app = require("./src/config/custom-express")();

app.use(function(req, res, next){
    res.status(404);

    // Resposta padrão para não encontrado
    if(req.accepts("html")){
        res.marko(require("./src/app/views/404.marko"));
        return;
    }
    
});

console.log('SERVIDOR RODANDO NA PORTA: ' + porta);
app.listen(porta);
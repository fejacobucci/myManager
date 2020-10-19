const modelos= require('../views/templates');

class BaseControlador {

    static funcionalidade() {
        return {
            base:'/',
            home:'/home',
            login:'/login'

        };
    }

    static rotas() {
        return {
            base:'../views/login.marko',
            home:'../views/home.marko',
            login:'../views/login.marko'
        };
    }

    base() {
        return function (req, res) {
            res.marko(require(BaseControlador.rotas().base));
        };
    }
    home() {
        return function (req, res) {
            res.marko(require(BaseControlador.rotas().home));
        };
    }
    login() {
        return function (req, res) {
            res.marko(require(BaseControlador.rotas().login));
        };
    }
    efetuaLogin() {
        return function (req, res, next) {
            const passport = req.passport;
            passport.authenticate('local',(erro, usuario, info) => {
                if(info){
                    return response.marko(modelos.login.login);
                }
                if(erro){
                    return next(erro);
                }

                req.login(usuario, (erro) => {
                    if(erro){
                        next(erro);
                    }

                    return res.redirect(BaseControlador.rotas().home);
                });
            })(req,res,next);
        };
    }


}
module.exports = BaseControlador;

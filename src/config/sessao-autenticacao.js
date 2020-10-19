const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UsuarioDao = require('../app/infra/UsuarioDAO.js');
const db = require('./DataBaseConfiguration');

module.exports = (app) =>{
    //Configuração da sessão e da autenticação.
    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'senha'
        },
        (email, senha, done) => {
            const usuarioDao = new UsuarioDao(db);
            usuarioDao.buscaPorEmail(email)
                .tehn(usuario =>{
                    if(!usuario || senha != usuario.senha){
                        console.log('Login ou senha incorretos');
                        return done(null, false, {
                            mensagem: 'Login ou senha incorretos!'
                        });
                    }
                    console.log('Usuario se logou' + usuario.nome);
                    return done(null, usuario);
                })
                .catch(erro => done(erro, false, 'Alguma coisa deu errado na validação do usuário e senha'));
        }
    ));

    //Serialização e Dessearlização do usuario no sistema
    passport.serializeUser((usuario,done) =>{
        const usuarioSessao = {
            nome: usuario.nome,
            email: usuario.email,
            permissao: usuario.permissao
        };
        done(null, usuarioSessao);
    });

    passport.deserializeUser((usuarioSessao, done) =>{
        done(null, usuarioSessao);
    });

    app.use(sessao({
        secret: ':P-YRUIT&*RVE@@&%RFTP*&*:)',
        genid: function(req){
            return uuid();
        },
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(function(req,res,next){
        req.passport = passport;
        next();
    });

};
const { check } = require('express-validator/check');
class Login{
    static validacoes(){
        return[
            check('email').isLength({min:5}).withMessage('Login invalido'),
            check('senha').isLength({min:6}).withMessage('Senha Inválida')
        ];
    }
}
module.exports=Login;
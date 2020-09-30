const { check, validationResult } = require('express-validator');
class Login{
    static validacoes(){
        return[
            check('usuario').isLength({min:5}).withMessage('Login invalido'),
            check('senha').isLength({min:6}).withMessage('Senha Inválida')
        ];
    }
}
module.exports=Login;
const { check, validationResult } = require('express-validator');
class NovoProjeto{
    static validacoes(){
        return[
            check('titulo').isLength({min:3}).withMessage('Titulo deve ser preenchido com mais de 3 caracteres'),
            check('cliente').isLength({min:1}).withMessage('Cliente precisa ser selecionado'),
            check('tempo').isNumeric().withMessage('O tempo deve ser numérico')
        ];
    }
}
module.exports=NovoProjeto;
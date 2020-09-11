class bancoDeHoras {
    constructor(db){
        this._db = db;
    }

    /// A PARTIR DAQUI COMEÇAM OS SQLs

    /// INSERIR PROJETO NO BD.
    inserirProjeto(projeto) {
        var SQL = "";
        SQL = "INSERT INTO produto (titulo,descricao,autor,cliente,tempoEstimado,dataPrevInicio,dataPrevFim,situacao,proposta)";
        SQL += " VALUES(?,?,?,?,?,?,?,?,?)";

        console.log(">> Criando produto novo");
        return new Promise((resolve, reject) => {
            this._db.run(
                SQL, [
                    projeto.titulo,
                    projeto.descricao,
                    projeto.autor,
                    projeto.cliente,
                    projeto.tempoEstimado,
                    projeto.dataPrevInicio,
                    projeto.dataPrevFim,
                    projeto.situacao,
                    projeto.proposta
            ],
                (erro) => {
                    if (erro) return reject("ERRO AO CADASTRAR PROJETO: " + erro);
                    resolve();
                }
            )
        });
        
    }


}
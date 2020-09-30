class projetosDAO {

    constructor(db) {
        this._db = db;
    }
	
	

	//CARREGA LISTA DE PROJETOS
    listaProjetos() {
		var SQL = '';

		SQL = 'SELECT * FROM Projeto'; 
		console.log('SQL: ' + SQL);

		return new Promise((resolve, reject) => {
			this._db.all(
				SQL,
				(erro, resultado) => {

					if(erro) {
						return reject("ERRO NA CONSULTA DOS SERVICOS: " + erro );

					}else{
					    return resolve(resultado);	

					}
					
				}
			)
		})
	}

	cadastraProjeto(projeto) {
        var SQL = "";
        SQL = "INSERT INTO Projeto (titulo,cliente,proposta,tempoEstimado,dataPrevInicio,dataPrevFim)";
        SQL += " VALUES(?,?,?,?,?,?)";

        console.log(">> Criando produto novo");
        return new Promise((resolve, reject) => {
            this._db.run(
                SQL, [
                    projeto.titulo,
					projeto.cliente.value,
					projeto.proposta,
                    projeto.tempoEstimado,
                    projeto.dataPrevInicio,
                    projeto.dataPrevFim
                ],
                (erro) => {
                    if (erro) return reject("ERRO AO CONSULTAR O ESTOQUE: " + erro);
                    resolve();
                }
            )
        });
    }

}

module.exports = projetosDAO;
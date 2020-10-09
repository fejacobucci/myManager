class projetosDAO {

    constructor(db) {
        this._db = db;
    }
	
	
    listaProjetos() {
		var SQL = '';

		SQL = 'SELECT * FROM Projeto'; 
		console.log('SQL: ' + SQL);

		return new Promise((resolve, reject) => {
			this._db.all(
				SQL,
				(erro, resultado) => {

					if(erro) {
						return reject("ERRO NA CONSULTA DOS PROJETOS: " + erro );

					}else{
					    return resolve(resultado);	

					}
					
				}
			)
		})
    }
    
    listaTarefas() {
		var SQL = '';

		SQL = 'SELECT * FROM Tarefa_Projeto'; 
		console.log('SQL: ' + SQL);

		return new Promise((resolve, reject) => {
			this._db.all(
				SQL,
				(erro, resultado) => {

					if(erro) {
						return reject("ERRO NA CONSULTA DAS TAREFAS: " + erro );

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
                    if (erro) return reject("ERRO AO CADASTRAR PROJETO: " + erro);
                    resolve();
                }
            )
        });
    }

}

module.exports = projetosDAO;
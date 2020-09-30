class horasDAO {

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
						console.log('RETORNOU ' + resultado.length + ' PROJETOS CADASTRADOS');
					    return resolve(resultado);	

					}
					
				}
			)
		})
	}


	//CARREGA LISTA DE ATIVIDADES POSSÍVEIS
    listaAtividades() {
		var SQL = '';

		SQL = 'SELECT * FROM Atividades'; 
		console.log('SQL: ' + SQL);

		return new Promise((resolve, reject) => {
			this._db.all(
				SQL,
				(erro, resultado) => {

					if(erro) {
						return reject("ERRO NA CONSULTA DAS ATIVIDADES POSSIVEIS: " + erro );

					}else{
						console.log('RETORNOU TAM ' + resultado.length + ' ATIVIDADES CADASTRADAS');
					    return resolve(resultado);	

					}
					
				}
			)
		})
	}
    

}

module.exports = horasDAO;
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

}

module.exports = projetosDAO;
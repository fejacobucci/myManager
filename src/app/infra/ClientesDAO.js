class clintesDAO {

    constructor(db) {
        this._db = db;
    }
	
	

	//CARREGA LISTA DE PROJETOS
    listaClientes() {
		var SQL = '';

		SQL = 'SELECT * FROM Clientes AS C JOIN Cliente_Usuario AS B WHERE B.usuario like "%2%" AND C.id = B.cliente'; 
		console.log('SQL: ' + SQL);

		return new Promise((resolve, reject) => {
			this._db.all(
				SQL,
				(erro, resultado) => {

					if(erro) {
						return reject("ERRO NA CONSULTA DOS SERVICOS: " + erro );

					}else{
						console.log('RETORNOU ' + resultado.length + ' CLIENTES CADASTRADOS');
					    return resolve(resultado);	

					}
					
				}
			)
		})
	}    

}

module.exports = clintesDAO;
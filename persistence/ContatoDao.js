function ContatoDao(connection) {
    this._connection = connection;
}

ContatoDao.prototype.salva = function(contato,callback) {
    this._connection.query('INSERT INTO contato SET ?', contato, callback);
}

ContatoDao.prototype.atualiza = function(contato,callback) {
    this._connection.query('UPDATE contato SET nome = ?, endereco = ?, telefone = ?, email = ? WHERE id = ?', [contato.nome,contato.endereco,contato.telefone,contato.email,contato.id], callback);
}

ContatoDao.prototype.lista = function(callback) {
    this._connection.query('select * FROM contato',callback);
}

ContatoDao.prototype.buscaPorId = function (id,callback) {
    this._connection.query("SELECT * FROM contato WHERE id = ?",[id],callback);
}

ContatoDao.prototype.deletePorId = function (id,callback) {
    this._connection.query("DELETE FROM contato WHERE id = ?",[id],callback);
}

module.exports = function(){
    return ContatoDao;
};

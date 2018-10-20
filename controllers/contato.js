module.exports = function (app) {


    app.get('/contatos', function (req, res) {

        var connection = app.db.connectionFactory();
        var contatoDao = new app.persistence.ContatoDao(connection);

        contatoDao.lista(function (error, results, fields) {
            res.send(results);
        }
        );
    });

    app.get('/contatos/contato/:id', function (req, res) {

        var id = req.params.id;
        var connection = app.db.connectionFactory();
        var contatoDao = new app.persistence.ContatoDao(connection);

        contatoDao.buscaPorId(id, function (erro, resultado) {
            if (erro) {
                res.status(500).send(erro);
            }
            res.send(resultado);
        });
        connection.end();
    });

    app.post("/contatos", function (req, res) {

        var contato = req.body;
        var errors = validationErrors(req);

        if (errors) {
            res.status(400).send(errors);
            return;
        }

        var connection = app.db.connectionFactory();
        var contatoDao = new app.persistence.ContatoDao(connection);

        contatoDao.salva(contato, function (exception, result) {
            if (!exception) {
                res.status(201).send(contato);
                return;
            }
        });
        connection.end();
    });

    app.put('/contatos/contato/:id', function (req, res) {

        var contato = req.body;
        var errors = validationErrors(req);

        if (errors) {
            res.status(400).send(errors);
            return;
        }

        var connection = app.db.connectionFactory();
        var contatoDao = new app.persistence.ContatoDao(connection);

        contatoDao.atualiza(contato, function (exception, result) {
            if (exception) {
                res.status(500).send(erro);
                return;
            }
            if (result.changedRows == 0) {
                res.status(204).send();
                return;
            }
            res.send(contato);
        });
        connection.end();
    });

    app.delete('/contatos/contato/:id', function (req, res) {

        var id = req.params.id;
        req.assert('id', 'Valor do id incorreto').isNumeric();
        var errors = req.validationErrors();

        if (errors) {
            res.status(400).send(errors);
            return;
        }

        var connection = app.db.connectionFactory();
        var contatoDao = new app.persistence.ContatoDao(connection);

        contatoDao.deletePorId(id, function (exception, result) {
            if (exception) {
                res.status(500).send(erro);
                return;
            }
            if (result.affectedRows == 0) {
                res.status(204).send();
                return;
            }
            res.status(200).send();
        });
        connection.end();
    });


    function validationErrors(req) {
        if (req.method == 'PUT')
            req.checkBody('id', 'Valor do id incorreto').isNumeric();
        req.assert('nome', 'Nome deve ser preenchido').notEmpty();
        req.assert('endereco', 'Endereco deve ser preenchido').notEmpty();
        req.assert('telefone', 'Telefone deve ser preenchido').notEmpty();
        req.assert('email', 'email deve ser preenchido').isEmail();

        return req.validationErrors();
    }

}

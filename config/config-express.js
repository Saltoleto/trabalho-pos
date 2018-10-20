var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

module.exports = function () {
    var app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(expressValidator());
    app.use(express.static("public"));
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    consign()
        .include('controllers')
        .include('db')
        .then('persistence')
        .into(app);

    return app;
}

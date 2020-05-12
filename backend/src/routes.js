const express = require('express');

const ContatoController = require('./controllers/ContatoController');

const routes = express.Router();

routes.get('/', ContatoController.index);
routes.post('/contatos', ContatoController.create);

routes.delete('/contatos/:id', ContatoController.delete)

module.exports = routes;
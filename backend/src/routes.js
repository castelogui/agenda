const express = require('express');

const ContatoController = require('./controllers/ContatoController');
const AgendaController = require('./controllers/AgendaController');

const routes = express.Router();

routes.get('/', AgendaController.index);
routes.post('/create', AgendaController.create);

routes.get('/contato/:id', ContatoController.index);
routes.delete('/contato/:id', ContatoController.delete)

module.exports = routes;
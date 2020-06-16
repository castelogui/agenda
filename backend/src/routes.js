const express = require('express');

const ContatoController = require('./controllers/ContatoController');
const AgendaController = require('./controllers/AgendaController');
const TasksController = require('./controllers/TasksController');

const routes = express.Router();

routes.get('/', AgendaController.index);
routes.post('/new/contato', AgendaController.create);
routes.delete('/contato/:id', AgendaController.delete);

routes.get('/contato/:id', ContatoController.index);

routes.get('/tasks', TasksController.index);
routes.post('/tasks/:id', TasksController.complete);
routes.delete('/tasks/:id', TasksController.delete);
routes.post('/tasks/update/:id', TasksController.update);
routes.post('/new/task', TasksController.create);

module.exports = routes;
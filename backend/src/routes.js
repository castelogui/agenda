const express = require('express');

const ProfileController = require('./controllers/ProfileController');
const TaskController = require('./controllers/TaskController');

const routes = express.Router();

routes.get('/profile', ProfileController.indexProfile);
routes.post('/new/profile', ProfileController.createProfile);
routes.delete('/profile/:id_profile', ProfileController.deleteProfile);

routes.get('/tasks', TaskController.indexTask);
routes.delete('/task/:id_task', TaskController.deleteTask);
routes.post('/task/update/:id_task', TaskController.updateTask);
routes.post('/new/task', TaskController.createTask);

module.exports = routes;
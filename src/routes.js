const express = require('express');
const ONGController = require('./controllers/ONGController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.post('/ongs', ONGController.create);
routes.get('/ongs', ONGController.getAll);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.getAll);
routes.get('/profile', IncidentController.get);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
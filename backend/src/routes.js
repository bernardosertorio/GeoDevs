const { Router } = require('express');

const DevController = require('./controllers/DevControllers');
const SearchController = require('./controllers/SearchController');


const routes = Router();

routes.get('/devs', DevController.index); // listagem de devs. O controller tem geralmente 5 funções: index, show, store, updare, destroy  
routes.post('/devs', DevController.store); // cadastro de Devs.

routes.get('/search', SearchController.index);

module.exports = routes; 
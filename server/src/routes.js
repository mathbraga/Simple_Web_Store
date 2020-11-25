const express = require('express');
const routes = express.Router();
const { initialize, terminate } = require('./database/Database');
const { selectRoles, selectUsers, selectCategories } = require('./fetchDB/fetchFullTable');

initialize();

routes.get('/categories', (req, res) => {
    selectCategories.then((r) => res.json(r));
});

routes.get('/users', (req, res) => {
    selectUsers.then((r) => res.json(r));
});

routes.get('/roles', (req, res) => {
    selectRoles.then((r) => res.json(r));
});

terminate();

module.exports = routes;
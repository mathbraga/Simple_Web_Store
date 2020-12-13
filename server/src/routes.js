const express = require('express');
const routes = express.Router();
const { initialize, terminate } = require('./database/Database');
const { selectRoles, selectUsers, selectCategories, selectCPU, queryUser } = require('./fetchDB/fetchFullTable');

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

routes.get('/cpu', (req, res) => {
    selectCPU.then((r) => res.json(r));
});

routes.post('/login', (req, res) => {
    queryUser(req.body).then((r) => res.json(r));
});

module.exports = routes;
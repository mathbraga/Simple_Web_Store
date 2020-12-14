const express = require('express');
const routes = express.Router();
const { initialize } = require('./database/Database');
const {
    selectCPU,
    selectGPU,
    selectMB,
    queryUser,
    insertUser,
    removeUser,
    insertProduct,
    removeProduct,
    insertOrder,
    selectOrders,
    selectAllOrders,
    updateOrder
} = require('./fetchDB/fetchFullTable');

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

routes.get('/gpu', (req, res) => {
    selectGPU.then((r) => res.json(r));
});

routes.get('/motherboard', (req, res) => {
    selectMB.then((r) => res.json(r));
});

routes.post('/login', (req, res) => {
    queryUser(req.body).then((r) => res.json(r));
});

routes.post('/signup', (req, res) => {
    insertUser(req.body).then((r) => res.json(r));
});

routes.post('/removeuser', (req, res) => {
    removeUser(req.body).then((r) => res.json(r));
});

routes.post('/addproduct', (req, res) => {
    insertProduct(req.body).then((r) => res.json(r));
});

routes.post('/removeproduct', (req, res) => {
    removeProduct(req.body).then((r) => res.json(r));
});

routes.post('/addorder', (req, res) => {
    insertOrder(req.body).then((r) => res.json(r));
});

routes.post('/myorders', (req, res) => {
    selectOrders(req.body).then((r) => res.json(r));
});

routes.get('/allorders', (req, res) => {
    selectAllOrders.then((r) => res.json(r));
});

routes.post('/updatestatus', (req, res) => {
    updateOrder(req.body).then((r) => res.json(r));
});

module.exports = routes;
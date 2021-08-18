const express = require('express');
const routes = express.Router();
const {initialize} = require('./database/Database');
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
  updateOrder,
} = require('./fetchDB/fetchFullTable');

initialize();


// Método get na rota /categories
// Retorna tabela com todas as categorias
routes.get('/categories', (req, res) => {
  selectCategories.then((r) => res.json(r));
});

// Método get na rota /users
// Retorna tabela com todos os usuários
routes.get('/users', (req, res) => {
  selectUsers.then((r) => res.json(r));
});

// Método get na rota /roles
// Retorna tabela com todos os tipos de usuário
routes.get('/roles', (req, res) => {
  selectRoles.then((r) => res.json(r));
});

// Método get na rota /cpu
// Retorna tabela com todas as cpus
routes.get('/cpu', (req, res) => {
  selectCPU.then((r) => res.json(r));
});

// Método get na rota /gpu
// Retorna tabela com todas as gpus
routes.get('/gpu', (req, res) => {
  selectGPU.then((r) => res.json(r));
});

// Método get na rota /motherboard
// Retorna tabela com todas as placas-mãe
routes.get('/motherboard', (req, res) => {
  selectMB.then((r) => res.json(r));
});

// Método post na rota /login
// Envia dados para efetuar login no sistema
routes.post('/login', (req, res) => {
  queryUser(req.body).then((r) => res.json(r));
});

// Método post na rota /signup
// Envia dados para cadastrar user no sistema
routes.post('/signup', (req, res) => {
  insertUser(req.body).then((r) => res.json(r));
});

// Método post na rota /removeuser
// Envia dados para remover user do sistema
routes.post('/removeuser', (req, res) => {
  removeUser(req.body).then((r) => res.json(r));
});

// Método post na rota /addproduct
// Envia dados para cadastrar produto no sistema
routes.post('/addproduct', (req, res) => {
  insertProduct(req.body).then((r) => res.json(r));
});

// Método post na rota /removeproduct
// Envia dados para remover produto do sistema
routes.post('/removeproduct', (req, res) => {
  removeProduct(req.body).then((r) => res.json(r));
});

// Método post na rota /addorder
// Envia dados para cadastrar pedido no sistema
routes.post('/addorder', (req, res) => {
  insertOrder(req.body).then((r) => res.json(r));
});

// Método post na rota /myorders
// Envia dados para retorna ao client tabela
// contendo os pedidos do user
routes.post('/myorders', (req, res) => {
  selectOrders(req.body).then((r) => res.json(r));
});

// Método get na rota /allorders
// Retorna tabela com todos os pedidos no sistema
routes.get('/allorders', (req, res) => {
  selectAllOrders("data").then((r) => res.json(r));
});

// Método post na rota /updatestatus
// Envia dados para atualizar o status de um
// pedido no sistema
routes.post('/updatestatus', (req, res) => {
  updateOrder(req.body).then((r) => res.json(r));
});

module.exports = routes;

'use strict';
// Atribuo dependências e métodos que serão executados dependendo da rota escolhida
const express = require('express');
const { createUser, readUsers, readOneUser, updateUser, deleteUser } = require('../controllers/UserController')
// Configuração do Router - dependência de rotas do Express
const router = express.Router();

// Rotas de CRUD
router.post('/user', createUser);
router.get('/users', readUsers);
router.get('/user/:id', readOneUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

// Exporto rotas
module.exports = {
    routes: router
}
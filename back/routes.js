'use strict';

const express = require('express');

//Métodos de crud
const { createUser, readUsers, readOneUser, updateUser, deleteUser } = require('./model/User')
const { createRoom, readRooms, readOneRoom, updateRoom, deleteRoom } = require("./model/Room")
const { createReservation, readReservations, readOneReservation, updateReservation, deleteReservation } = require("./model/Reservation");

const router = express.Router();    

// Rotas de CRUD do USER
router.post('/user', createUser);
router.get('/users', readUsers);
router.get('/user/:id', readOneUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

// Rotas de CRUD de ROOM
router.post('/room', createRoom);
router.get('/rooms', readRooms);
router.get('/room/:id', readOneRoom);
router.put('/room/:id', updateRoom);
router.delete('/room/:id', deleteRoom);

// Rotas de CRUD de ROOM
router.post('/reservation', createReservation);
router.get('/reservations', readReservations);
router.get('/reservation/:id', readOneReservation);
router.put('/reservation/:id', updateReservation);
router.delete('/reservation/:id', deleteReservation);

// Rotas de funções
router.post('/reserve', createReservation)
router.post('/finish', updateReservation)
// Exporto rotas
module.exports = {
    routes: router
}
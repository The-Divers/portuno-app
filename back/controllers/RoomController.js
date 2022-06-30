'use strict';
// Denpendências para atuar sobre o banco de dados
const firebase = require('../db');
const Room = require('../models/Room');
const firestore = firebase.firestore()

/* Regras de negócio */

/* Métodos CRUD 
(Create, Read, Update, Delete)*/

// Cadastra um novo usuário
const createRoom = async (req, res) => {
    try {
        // Captura dos dados através do corpo da requisição
        const data = req.body;
        // Operação de cadastro
        await firestore.collection('rooms').doc().set(data);
        // Feedback positivo
        res.send('Room recorded :)')
    } catch (error) {
        // Feedback negativo
        res.status(400).send(error.message);
    }
}

// Receber todos os usuários
const readRooms = async (req, res) => {
    try {
        // Capturo a coleção usuários e capturo(get) os dados
        const rooms = await firestore.collection('rooms');
        const data = await rooms.get();
        // Array para organizar os usuários
        const roomsArray = []
        // Testa se há algum usuário para poder dar o Feedback
        if (data.empty) {
            // Feedback negativo
            res.status(404).send('No room found :(')
        } else {
            // Para cada usuário do BD será instanciado um objeto de Room
            data.forEach(doc => {
                const room = new Room(
                    doc.id,
                    doc.data().name,
                    doc.data().fullName,
                    doc.data().position,
                    doc.data().roomType,
                    doc.data().roomStatus,
                    doc.data().roomCapacity,
                    doc.data().contains,
                    doc.data().userOccupying
                );
                // Cada objeto usuário será colocado no Array
                roomsArray.push(room);
            });
            // Feedback positivo
            res.send(roomsArray);
        }
    } catch (error) {
        // Feedback negativo
        res.status(404).send('No rooms found :(');
    }
}

// Receber apenas um usuário
const readOneRoom = async (req, res) => {
    try {
        // Passando um id pelos parâmetros da requisição
        const id = req.params.id;
        // Capturo da coleção usuário um usuário pelo id
        const room = await firestore.collection('rooms').doc(id);
        // Capturo os dados desse usuário
        const data = await room.get();
        // Testa se há dados
        if (!data.exists) {
            // Feedback negativo
            res.status(404).send(error.message);
        } else {
            // Feedback positivo
            res.send(data.data());
        }
    } catch (error) {
        // Feedback negativo
        res.status(404).send(error.message);
    }
}

// Atualizar um usuário
const updateRoom= async (req, res) => {
    try {
        // Passando um id pelos parâmetros da requisição
        const id = req.params.id;
        // Recebo o conteúdo atualizado pelo corpo da requisição
        const data = req.body;
        // Em uma coleção e em um dado usuário ocorre a Operação de atualização
        const room = await firestore.collection('rooms').doc(id)
        await room.update(data)
        // Feedback positivo
        res.send('Room updated :)')
    } catch (error) {
        // Feedback negativo
        res.status(404).send(error.message);
    }

}

// Deletar um usuário
const deleteRoom = async (req, res) => {
    try {
        // Passando um id pelos parâmetros da requisição
        const id = req.params.id;
        // Operação de deletar, em uma coleção, um usuário pelo seu id
        const room = await firestore.collection('rooms').doc(id).delete();
        // Feedback positivo
        res.send('Room deleted :)')
    } catch (error) {
        // Feedback negativo
        res.status(404).send(error.message);
    }
}

//Exporta os métodos
module.exports = {
    createRoom,
    readRooms,
    readOneRoom,
    updateRoom,
    deleteRoom
}

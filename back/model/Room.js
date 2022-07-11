'use strict';
// Denpendências para atuar sobre o banco de dados
const firebase = require('../db');
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
        const roomsBd = await firestore.collection('rooms').get();
        // Testa se há algum usuário para poder dar o Feedback
        if (roomsBd.empty) {
            // Feedback negativo
            res.status(404).send('No rooms found :(')
        } else {
            // Para cada usuário do BD será instanciado um objeto de User
            let rooms = roomsBd.docs.map(doc => {
                return {
                    id: doc.id,
                    data: doc.data()
                };
            })
            res.send(rooms);
            // console.log(rooms);
        }
    } catch (error) {
        // Feedback negativo
        console.log(error.message);
        //res.status(404).send(error);
    }
}

// Receber apenas um usuário
const readOneRoom = async (req, res) => {
    try {
        // Passando um id pelos parâmetros da requisição
        const id = req.params.id;
        // Capturo da coleção usuário um usuário pelo id
        const roomBd = await firestore.collection('rooms').doc(id).get();
        // Testa se há dados
        if (!roomBd.exists) {
            // Feedback negativo
            res.status(404).send(error.message);
        } else {
            // Feedback positivo
            res.send(roomBd.data());
            // console.log(roomBd.data())
        }
    } catch (error) {
        // Feedback negativo
        res.status(404).send(error.message);
    }
}

// Atualizar um usuário
const updateRoom = async (req, res) => {
    try {
        // Passando um id pelos parâmetros da requisição
        const id = req.params.id;
        // Recebo o conteúdo atualizado pelo corpo da requisição
        const data = req.body;
        // Em uma coleção e em um dado usuário ocorre a Operação de atualização
        const room = await firestore.collection('rooms').doc(id).update(data);
        // Feedback positivo
        res.send('Room updated :)')
        // console.log(room.data())
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

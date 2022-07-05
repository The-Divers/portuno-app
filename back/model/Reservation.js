'use strict';
// Denpendências para atuar sobre o banco de dados
const firebase = require('../db');
const firestore = firebase.firestore()

/* Métodos CRUD 
(Create, Read, Update, Delete)*/

// Cadastra um novo usuário
const createReservation = async (req, res) => {
    try {
        // Captura dos dados através do corpo da requisição
        const data = req.body;
        // Operação de cadastro
        await firestore.collection('reservations').doc().set(data);
        // Feedback positivo
        res.send('Reservation recorded :)')
    } catch (error) {
        // Feedback negativo
        res.status(400).send(error.message);
    }
}

// Receber todos os usuários
const readReservations = async (req, res) => {
    try {
        // Capturo a coleção usuários e capturo(get) os dados
        const reservationsBd = await firestore.collection('reservations').get();
        // Testa se há algum usuário para poder dar o Feedback
        if (reservationsBd.empty) {
            // Feedback negativo
            res.status(404).send('No user found :(')
        } else {
            // Para cada usuário do BD será instanciado um objeto de User
            let reservations = reservationsBd.docs.map(doc => {
                return {
                    id: doc.id,
                    data: doc.data()
                };
            })
            res.send(reservations);
            // console.log(reservations);
        }
    } catch (error) {
        // Feedback negativo
        res.status(404).send('No users found :(');
    }
}

// Receber apenas um usuário
const readOneReservation = async (req, res) => {
    try {
        // Passando um id pelos parâmetros da requisição
        const id = req.params.id;
        // Capturo da coleção usuário um usuário pelo id
        const reservation = await firestore.collection('reservations').doc(id);
        // Capturo os dados desse usuário
        const data = await reservation.get();
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
const updateReservation = async (req, res) => {
    try {
        // Passando um id pelos parâmetros da requisição
        const id = req.params.id;
        // Recebo o conteúdo atualizado pelo corpo da requisição
        const data = req.body;
        // Em uma coleção e em um dado usuário ocorre a Operação de atualização
        const reservation = await firestore.collection('reservations').doc(id)
        await reservation.update(data)
        // Feedback positivo
        res.send('Reservation updated :)')
    } catch (error) {
        // Feedback negativo
        res.status(404).send(error.message);
    }

}

// Deletar um usuário
const deleteReservation = async (req, res) => {
    try {
        // Passando um id pelos parâmetros da requisição
        const id = req.params.id;
        // Operação de deletar, em uma coleção, um usuário pelo seu id
        const reservation = await firestore.collection('reservations').doc(id).delete();
        // Feedback positivo
        res.send('Reservation deleted :)')
    } catch (error) {
        // Feedback negativo
        res.status(404).send(error.message);
    }
}

//Exporta os métodos
module.exports = {
    createReservation,
    readReservations,
    readOneReservation,
    updateReservation,
    deleteReservation
}

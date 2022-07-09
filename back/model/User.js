'use strict';
// Denpendências para atuar sobre o banco de dados
const firebase = require('../db');
const firestore = firebase.firestore()

/* Regras de negócio */


/* Métodos CRUD 
(Create, Read, Update, Delete)*/

// Cadastra um novo usuário
const createUser = (req, res) => {
    let data = req.body;
    const uid = data.uid;
    const email = data.email;
    const password = data.password;
    const auth = firebase.auth();
    auth.createUser({ uid: uid, email: email, password: password })
        .then((userCredential) => {
            let user = userCredential.user;
        })
        .catch((error) => {
            console.error(error);
        });
}

// Receber todos os usuários
const readUsers = async (req, res) => {
    try {
        // Capturo a coleção usuários e capturo(get) os dados
        const usersBd = await firestore.collection('users').get();
        // Testa se há algum usuário para poder dar o Feedback
        if (usersBd.empty) {
            // Feedback negativo
            res.status(404).send('No user found :(')
        } else {
            // Para cada usuário do BD será instanciado um objeto de User
            let users = usersBd.docs.map(doc => {
                return {
                    id: doc.id,
                    data: doc.data()
                };
            })
            res.send(users);
            // console.log(users);
        }
    } catch (error) {
        // Feedback negativo
        res.status(404).send('No users found :(');
    }
}

// Receber apenas um usuário
const readOneUser = async (req, res) => {
    try {
        // Passando um id pelos parâmetros da requisição
        const id = req.params.id;
        // Capturo da coleção usuário um usuário pelo id
        const user = await firestore.collection('users').doc(id);
        // Capturo os dados desse usuário
        const data = await user.get();
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
const updateUser = async (req, res) => {
    try {
        // Passando um id pelos parâmetros da requisição
        const id = req.params.id;
        // Recebo o conteúdo atualizado pelo corpo da requisição
        const data = req.body;
        // Em uma coleção e em um dado usuário ocorre a Operação de atualização
        const user = await firestore.collection('users').doc(id)
        await user.update(data)
        // Feedback positivo
        res.send('User updated :)')
    } catch (error) {
        // Feedback negativo
        res.status(404).send(error.message);
    }

}

// Deletar um usuário
const deleteUser = async (req, res) => {
    try {
        // Passando um id pelos parâmetros da requisição
        const id = req.params.id;
        // Operação de deletar, em uma coleção, um usuário pelo seu id
        const user = await firestore.collection('users').doc(id).delete();
        // Feedback positivo
        res.send('User deleted :)')
    } catch (error) {
        // Feedback negativo
        res.status(404).send(error.message);
    }
}

//Exporta os métodos
module.exports = {
    createUser,
    readUsers,
    readOneUser,
    updateUser,
    deleteUser
}

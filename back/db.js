//Dependências do Firebase e de variáveis de ambiente
const firebase = require('firebase-admin')
const config = require('./config')

//Inicialização do banco de dados na API
const db = firebase.initializeApp(config.firebaseConfig)

//Exporta o banco de dados
module.exports = db;
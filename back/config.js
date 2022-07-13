'use strict';
// Atribuição de dependências: Orquestrador dotenv
const dotenv = require('dotenv')
const assert = require('assert')

//Configuração padrão do dotnev
dotenv.config();

//Destructing das variáveis de ambiente .env
const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;

assert(HOST, 'HOST is required');
assert(PORT, 'PORT is required');

//Exportar variáveis de ambiente
module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
    }
}

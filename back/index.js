'use strict';
// Atribuição de dependências
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

//Atribuição de rotas
const router = require('./routes');

//Instanciação de uma aplicação em Express
const app = express();

//Utilização de dependências e configuração de Api
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//Rota padrão
app.use('/api', router.routes);

//Definição de onde a Api será ouvida
app.listen(config.port, () => {
    console.log(`PORTUNO is listening on url ${config.url}`)
})
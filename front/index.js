"use strict;"

const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const Auth = require("./firebase.js")
const routes = require("./routes");
app.use(bodyParser.urlencoded({ extended: true }))

const port = 5000;
const address = "localhost";

const expressLayouts = require('express-ejs-layouts');
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(expressLayouts);


app.use('/', routes);

const server = app.listen(port, address, function () {
    let host = server.address().address;
    let port = server.address().port;
   
    console.log(`Servidor executando no endereço ${host} e na porta ${port}`);
});
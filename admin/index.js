"use strict;"

const express = require("express");
const app = express();
const routes = require("./routes");

const port = 3030;
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
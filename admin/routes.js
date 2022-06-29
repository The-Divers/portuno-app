const express = require("express");
const router = express.Router();
const { rooms } = require("./models/rooms")

router.use(express.static('public'));

// Rotas de páginas
router.get('/', (req, res) => {
    res.render("pages/login");
});

router.get('/home', (req, res) => {
    res.render("pages/home", { rooms });
});

router.get('/solicitacoes', (req, res) => {
    res.render("pages/solicitacoes");
});

router.get('/historico', (req, res) => {
    res.render("pages/historico");
});


module.exports = router;
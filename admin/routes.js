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
    const reservations = [
        {
            nome: "Deivid Mota Freitas",
            idAcademico: "511113",
            salaNome: "Lab 04",
            telefone: "(85)99236733",
            date: "05/07",
            checkin: "14:00",
            checkout: null
        },
        {
            nome: "João Victor Barroso Alves",
            idAcademico: "509697",
            salaNome: "Lab 03",
            telefone: "(85)91235677",
            date: "05/07",
            checkin: "13:00",
            checkout: "14:00"
        }
    ]
    res.render("pages/historico", { reservations: reservations });
});

router.get('/pedidos', (req, res) => {
    const reservations = [
        {
            nome: "Deivid Mota Freitas",
            idAcademico: "511113",
            tipo: "aluno",
            salaNome: "Lab 04"
        },
        {
            nome: "João Victor Barroso Alves",
            idAcademico: "509697",
            tipo: "aluno",
            salaNome: "Lab 03"
        },
        {
            nome: "George Allan Menezes",
            idAcademico: "7162735",
            tipo: "professor",
            salaNome: "Lab 01"
        },
        {
            nome: "Lazaro Natanael da Silva",
            idAcademico: "555555",
            tipo: "aluno",
            salaNome: "C.A"
        }
    ]
    res.render("pages/pedidos", { reservations: reservations });
});


module.exports = router;
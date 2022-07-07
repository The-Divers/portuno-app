const express = require("express");
const { getReservations } = require("./models/Reservations");
const router = express.Router();
const { rooms } = require("./models/Rooms")

router.use(express.static('public'));

// ROTAS DE
router.get('/', (req, res) => {
    res.render("pages/login");
});

router.get('/home', (req, res) => {
    res.render("pages/home", { rooms });
});

router.get('/solicitacoes', (req, res) => {
    res.render("pages/solicitacoes");
});

router.get('/horarios', (req, res) => {
    res.render("pages/horarios");
});

router.get('/permissoes', (req, res) => {
    res.render("pages/permissoes");
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

router.get('/pedidos', async (req, res) => {
    const reservations = await getReservations();

    if (reservations != null) {
        for (let i = 0; i < reservations.length; i++) {
            if (reservations[i].data.status != "PENDENTE") {
                reservations.splice(i, 1);
            }
        }
    }
    res.render("pages/pedidos", { reservations: reservations });

});


module.exports = router;
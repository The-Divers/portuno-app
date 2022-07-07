const express = require("express");
const { getReservations, getOneReservation, updateReservation } = require("./models/Reservations");
const router = express.Router();
const { rooms, updateRoom } = require("./models/Rooms")

router.use(express.static('public'));

// ROTAS DE PÁGINAS
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

router.get('/historico', async (req, res) => {
    const reservations = await getReservations();

    if (reservations != null) {
        for (let i = 0; i < reservations.length; i++) {
            if (reservations[i].data.status == "PENDENTE") {
                reservations.splice(i, 1);
            }
        }
    }
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

// ROTAS DE AÇÕES
router.get('/alowReservation/:id', async (req, res) => {
    let id = req.params.id;
    let reservation = await getOneReservation(id);

    if (reservation != null) {
        let updateReservationData = {
            status: 'PERMITIDO',
            date: new Date().getDate() + "/" + new Date().getMonth(),
            checkin: new Date().getHours() + ":" + new Date().getMinutes(),
            checkout: null,
            roomName: reservation.roomName,
            roomId: reservation.roomId,
            uid: reservation.uid,
            nameUser: reservation.nameUser
        }
        //Atualiza reserva
        await updateReservation(id, updateReservationData);

        let updateRoomData = {
            status: "ocupado",
            userOccupying: reservation.nameUser
        }

        await updateRoom(reservation.roomId, updateRoomData);



    }
    // 

});

module.exports = router;
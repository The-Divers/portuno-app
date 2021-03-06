const express = require("express");
const { getReservations, getOneReservation, updateReservation } = require("./models/Reservations");
const router = express.Router();
const { users } = require('./models/Users')
const { mockRooms, getRooms, updateRoom } = require("./models/Rooms")

router.use(express.static('public'));

// ROTAS DE PÁGINAS
router.get('/', (req, res) => {
    res.render("pages/login", { alert: null });
});

router.get('/errorLogin', (req, res) => {
    res.render("pages/login", { alert: "Entre com dados de login corretos!" });
});

router.get('/home', async (req, res) => {
    let rooms = await getRooms();
    // let rooms = mockRooms;

    rooms = rooms.sort((a, b) => a.data.order - b.data.order)
    res.render("pages/home", { rooms: rooms, filter: false });

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
    let historico = []
    if (reservations != null) {
        for (let i = 0; i < reservations.length; i++) {
            if (reservations[i].data.status == "PERMITIDO" || reservations[i].data.status == "FINALIZADO") {
                historico.push(reservations[i]);
            }
        }
    }
    res.render("pages/historico", { reservations: historico });
});

router.get('/pedidos', async (req, res) => {
    const reservations = await getReservations();
    const pedidos = [];
    if (reservations != null) {
        for (let i = 0; i < reservations.length; i++) {
            if (reservations[i].data.status == "PENDENTE") {
                pedidos.push(reservations[i]);
            }
        }
    }

    res.render("pages/pedidos", { reservations: pedidos });

});

// ROTAS DE AÇÕES
router.get('/alowReservation/:id', async (req, res) => {
    let id = req.params.id;
    let reservation = await getOneReservation(id);

    if (reservation != null) {
        let d = new Date();
        let updateReservationData = {
            status: 'PERMITIDO',
            date: `${d.getDate() < 10 ? '0' : ''}${d.getDate()}/${(d.getMonth() + 1) < 10 ? '0' : ''}${d.getMonth() + 1}`,
            checkin: new Date().getHours() + "H" + new Date().getMinutes() + "min",
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
});

router.get('/denyReservation/:id', async (req, res) => {
    let id = req.params.id;
    let reservation = await getOneReservation(id);

    if (reservation != null) {
        let updateReservationData = {
            status: 'NEGADO'
        }
        //Atualiza reserva
        await updateReservation(id, updateReservationData);
    }
    // 

});

router.get('/editRoom/:id', async (req, res) => {
    let id = req.params.id;
    let roomData = req.body;

    let response = updateRoom(id, roomData)
});

router.post('/logar', (req, res) => {
    // let uid = req.body.siape;
    // let password = req.body.senha;

    // try {
    //     users.forEach(user => {

    //         if (user.id == uid && user.password == password) {
    //             res.redirect('/home')
    //         } else {
    //             res.redirect('/errorLogin');
    //         }
    //     });
    // } catch (error) {
    //     console.error("Ocorreu um erro : " + error.message);
    // }
    res.redirect('/home');
});

module.exports = router;
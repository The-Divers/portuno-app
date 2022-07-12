const express = require("express");
const axios = require("axios")
const rooms = require("./model/Rooms");
const router = express.Router();
const { getRooms, getOneRoom, updateRoom } = require('./model/Rooms')
const { getReservations, getOneReservation, updateReservation } = require('./model/Reservation')
const { userApp } = require('./model/Users')

router.use(express.static('public'));

/* <<< ROTAS DE PÁGINAS >>> */

router.get('/', (req, res) => {
    res.render("pages/login");
});

router.get('/home', async (req, res) => {
    //Recebe todas as salas
    let rooms = await getRooms();
    //Remove salas de outros andares
    for (var i = rooms.length - 1; i >= 0; i--) {
        if (rooms[i].data.position != 0) {
            rooms.splice(i, 1);
        }
    }
    //Ordena as salas
    rooms = rooms.sort((a, b) => a.data.order - b.data.order)
    res.render("pages/home", { rooms: rooms, filter: false });

});

router.get('/andar1', async (req, res) => {
    //Recebe todas as salas
    let rooms = await getRooms();
    //Remove salas de outros andares
    for (var i = rooms.length - 1; i >= 0; i--) {
        if (rooms[i].data.position != 1) {
            let room = rooms[i];
            rooms.splice(i, 1);
        }
    }
    //Ordena as salas
    rooms = rooms.sort((a, b) => a.data.order - b.data.order)
    res.render("pages/andar1", { rooms: rooms, filter: false });
});

router.get('/andar2', async (req, res) => {
    //Recebe todas as salas
    let rooms = await getRooms();
    //Remove salas de outros andares
    for (var i = rooms.length - 1; i >= 0; i--) {
        if (rooms[i].data.position != 2) {
            let room = rooms[i];
            rooms.splice(i, 1);
        }
    }
    //Ordena as salas
    rooms = rooms.sort((a, b) => a.data.order - b.data.order)
    res.render("pages/andar2", { rooms: rooms, filter: false });
});

router.get('/horarios', (req, res) => {
    res.render("pages/horarios");
});

router.get('/reservas', async (req, res) => {
    //Recebe as reservas
    const reservations = await getReservations();
    let user = userApp;

    let myReservation = null;

    //Mostra apenas as reservas relacionadas ao usuário
    if (reservations != null) {
        reservations.forEach(reservation => {
            if (user.uid == reservation.data.uid && reservation.data.status == "PERMITIDO") {
                console.log(reservation);
                myReservation = reservation;
            }
        });
    }
    //Renderiza a página de reservas
    res.render("pages/reservas", { reservation: myReservation });
});

router.get('/perfil', (req, res) => {
    res.render("pages/perfil");
});


/* <<< ROTAS DE AÇÃO >>> */

router.get('/sendRerervation/:id', async (req, res) => {
    let id = req.params.id;
    //Recebe o usuário logado, reservas e salas
    let user = userApp;
    let reservations = await getReservations();
    let room = await getOneRoom(id)
    //Variável auxiliar para envio de reserva
    let sendReservation;
    // let sendStatus;

    if (reservations != null) {
        reservations.forEach(async reservation => {
            // Verifica se o usuário já está reservando alguma sala
            if (reservation.data.status == "PERMITIDO" && reservation.data.uid == user.uid) {
                // sendStatus = "Você já está reservando uma sala!";
            } else {
                sendReservation = {
                    uid: user.uid,
                    nameUser: user.name,
                    roomId: id,
                    roomName: room.name,
                    status: "PENDENTE",
                    checkin: null,
                    checkout: null
                }
                //Reservando a sala
                let response = await axios.post("http://localhost:8080/api/reserve", sendReservation)
                //Status
                // sendStatus = (response == "Reservation recorded :)") ? "Seu pedido de reserva foi enviado com sucesso, aguarde a confirmação!" : "Ocorreu um erro no seu pedido de reserva, tente novamente!";
            }
        });
    } else {
        //Se não houver reservas
        sendReservation = {
            uid: user.uid,
            nameUser: user.name,
            roomId: id,
            roomName: room.name,
            status: "PENDENTE",
            checkin: null,
            checkout: null
        }
        let response = await axios.post("http://localhost:8080/api/reserve", sendReservation);
        // sendStatus = (response == "Reservation recorded :)") ? "Seu pedido de reserva foi enviado com sucesso, aguarde a confirmação!" : "Ocorreu um erro no seu pedido de reserva, tente novamente!";
    }
    res.redirect('/home');
    // res.redirect('/home', { alert: sendReservation });
})

router.get('/finalizeReservation/:id', async (req, res) => {
    let id = req.params.id;
    let user = userApp;
    let reservation = await getOneReservation(id);
    console.log(reservation)
    //Atualiza sala
    let dataUpdateRoom = {
        status: "disponível",
        userOccupying: null
    }
    let responseRoom = await updateRoom(reservation.roomId, dataUpdateRoom);

    //Atualiza reserva
    let dataUpdateReservation = {
        checkout: new Date().getHours() + "H" + new Date().getMinutes() + "min",
        status: "FINALIZADO"
    }
    let responseReservation = await updateReservation(id, dataUpdateReservation);

});

/* <<< ROTAS DE FILTROS >>> */

router.post('/home', async (req, res) => {
    let data = req.body
    //Recebe salas
    let rooms = await getRooms();
    let filterRooms = [];
    //Remove salas de outros andares
    for (var i = rooms.length - 1; i >= 0; i--) {
        if (rooms[i].data.position != 0) {
            rooms.splice(i, 1);
        }
    }
    //Filtra as salas de acordo com o filtro
    if (data.filter1 != undefined) {
        for (var i = rooms.length - 1; i >= 0; i--) {
            if (rooms[i].data.roomType == data.filter1) {
                filterRooms.push(rooms[i]);
            }
        }
        if (data.filter2 != undefined) {
            for (var i = filterRooms.length - 1; i >= 0; i--) {
                if (filterRooms[i].data.status == data.filter2) {
                } else {
                    filterRooms.splice(i, 1);
                }
            }
        }
    } else {
        if (data.filter2 != undefined) {
            for (var i = rooms.length - 1; i >= 0; i--) {
                if (rooms[i].data.status == data.filter2) {
                } else {
                    rooms.splice(i, 1);
                }
            }
        }
        filterRooms = rooms;
    }
    //Ordena as salas
    filterRooms = filterRooms.sort((a, b) => a.data.order - b.data.order)
    res.render("pages/home", { rooms: filterRooms, filter: true });

});

router.post('/andar1', async (req, res) => {
    let data = req.body
    //Recebe salas
    let rooms = await getRooms();
    let filterRooms = [];
    //Remove salas de outros andares
    for (var i = rooms.length - 1; i >= 0; i--) {
        if (rooms[i].data.position != 1) {
            rooms.splice(i, 1);
        }
    }
    //Filtra as salas de acordo com o filtro
    if (data.filter1 != undefined) {
        for (var i = rooms.length - 1; i >= 0; i--) {
            if (rooms[i].data.roomType == data.filter1) {
                filterRooms.push(rooms[i]);
            }
        }
        if (data.filter2 != undefined) {
            for (var i = filterRooms.length - 1; i >= 0; i--) {
                if (filterRooms[i].data.status == data.filter2) {
                } else {
                    filterRooms.splice(i, 1);
                }
            }
        }
    } else {
        if (data.filter2 != undefined) {
            for (var i = rooms.length - 1; i >= 0; i--) {
                if (rooms[i].data.status == data.filter2) {
                } else {
                    rooms.splice(i, 1);
                }
            }
        }
        filterRooms = rooms;
    }
    //Ordena as salas
    filterRooms = filterRooms.sort((a, b) => a.data.order - b.data.order)
    res.render("pages/andar1", { rooms: filterRooms, filter: true });

});

router.post('/andar2', async (req, res) => {
    let data = req.body
    //Recebe as salas
    let rooms = await getRooms();
    let filterRooms = [];
    //Remove salas de outros andares
    for (var i = rooms.length - 1; i >= 0; i--) {
        if (rooms[i].data.position != 2) {
            rooms.splice(i, 1);
        }
    }
    //Filtra as salas de acordo com o filtro
    if (data.filter1 != undefined) {
        for (var i = rooms.length - 1; i >= 0; i--) {
            if (rooms[i].data.roomType == data.filter1) {
                filterRooms.push(rooms[i]);
            }
        }
        if (data.filter2 != undefined) {
            for (var i = filterRooms.length - 1; i >= 0; i--) {
                if (filterRooms[i].data.status == data.filter2) {
                } else {
                    filterRooms.splice(i, 1);
                }
            }
        }
    } else {
        if (data.filter2 != undefined) {
            for (var i = rooms.length - 1; i >= 0; i--) {
                if (rooms[i].data.status == data.filter2) {
                } else {
                    rooms.splice(i, 1);
                }
            }
        }
        filterRooms = rooms;
    }
    //Ordena as salas
    filterRooms = filterRooms.sort((a, b) => a.data.order - b.data.order)
    res.render("pages/andar2", { rooms: filterRooms, filter: true });

});

module.exports = router;
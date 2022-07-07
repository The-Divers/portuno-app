const express = require("express");
const axios = require("axios")
const rooms = require("./model/Rooms");
const router = express.Router();
const { getRooms, getOneRoom } = require('./model/Rooms')

router.use(express.static('public'));

// ROTAS DE PÁGINAS
router.get('/', (req, res) => {
    res.render("pages/login");
});

router.get('/home', async (req, res) => {
    let rooms = await getRooms();
    //Remove salas de outros andares
    for (var i = rooms.length - 1; i >= 0; i--) {
        if (rooms[i].data.position != 0) {
            let room = rooms[i];
            rooms.splice(i, 1);
        }
    }
    rooms = rooms.sort((a, b) => a.data.order - b.data.order)
    res.render("pages/home", { rooms: rooms,  filter: false });

});

router.get('/andar1', async (req, res) => {
    let rooms = await getRooms();
    //Remove salas de outros andares
    for (var i = rooms.length - 1; i >= 0; i--) {
        if (rooms[i].data.position != 1) {
            let room = rooms[i];
            rooms.splice(i, 1);
        }
    }
    rooms = rooms.sort((a, b) => a.data.order - b.data.order)
    res.render("pages/andar1", { rooms: rooms,  filter: false });
});

router.get('/andar2', async (req, res) => {
    let rooms = await getRooms();
    //Remove salas de outros andares
    for (var i = rooms.length - 1; i >= 0; i--) {
        if (rooms[i].data.position != 2) {
            let room = rooms[i];
            rooms.splice(i, 1);
        }
    }
    rooms = rooms.sort((a, b) => a.data.order - b.data.order)
    res.render("pages/andar2", { rooms: rooms, filter: false });
});

router.get('/horarios', (req, res) => {
    res.render("pages/horarios");
});

router.get('/reservas', (req, res) => {
    res.render("pages/reservas");
});

router.get('/perfil', (req, res) => {
    res.render("pages/perfil");
});


//ROTAS DE FILTROS
router.post('/home', async (req, res) => {
    let data = req.body

    let rooms = await getRooms();
    let filterRooms = [];
    //Remove salas de outros andares
    for (var i = rooms.length - 1; i >= 0; i--) {
        if (rooms[i].data.position != 0) {
            rooms.splice(i, 1);
        }
    }
    //Adiciona a Salas Filtradas as salas com os  de tipo
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
                if (rooms[i].data.status != data.filter2) {
                } else {
                    rooms.splice(i, 1); F
                }
            }
        }
        filterRooms = rooms;
    }

    filterRooms = filterRooms.sort((a, b) => a.data.order - b.data.order)
    res.render("pages/home", { rooms: filterRooms, filter: true });

});

router.post('/andar1', async (req, res) => {
    let data = req.body

    let rooms = await getRooms();
    let filterRooms = [];
    //Remove salas de outros andares
    for (var i = rooms.length - 1; i >= 0; i--) {
        if (rooms[i].data.position != 1) {
            rooms.splice(i, 1);
        }
    }
    //Adiciona a Salas Filtradas as salas com os  de tipo
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
                if (rooms[i].data.status != data.filter2) {
                } else {
                    rooms.splice(i, 1); F
                }
            }
        }
        filterRooms = rooms;
    }

    filterRooms = filterRooms.sort((a, b) => a.data.order - b.data.order)
    res.render("pages/andar1", { rooms: filterRooms, filter: true });

});

router.post('/andar2', async (req, res) => {
    let data = req.body

    let rooms = await getRooms();
    let filterRooms = [];
    //Remove salas de outros andares
    for (var i = rooms.length - 1; i >= 0; i--) {
        if (rooms[i].data.position != 2) {
            rooms.splice(i, 1);
        }
    }
    //Adiciona a Salas Filtradas as salas com os  de tipo
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
                if (rooms[i].data.status != data.filter2) {
                } else {
                    rooms.splice(i, 1); F
                }
            }
        }
        filterRooms = rooms;
    }

    filterRooms = filterRooms.sort((a, b) => a.data.order - b.data.order)
    res.render("pages/andar2", { rooms: filterRooms, filter: true });

});
//ROTAS DE CRUD
router.get('/sendRerervation/:id', async (req, res) => {
    let id = req.params.id;
    let room = await getOneRoom(id)

    let reservation = {
        uid: "509697",
        nameUser: "João Victor Barroso Alves",
        roomId: id,
        roomName: room.name,
        status: "PENDENTE",
        checkin: null,
        checkout: null
    }

    let response = await axios.post("http://localhost:8080/api/reserve", reservation)

})

module.exports = router;
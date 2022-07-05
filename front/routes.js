const express = require("express");
const rooms = require("./model/rooms");
const router = express.Router();
const { getRooms } = require('./model/rooms')

// let authentication = null
router.use(express.static('public'));

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
    rooms = rooms.sort((a,b) => a.data.order - b.data.order)
    console.log(rooms);
    res.render("pages/home", { rooms: rooms });

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
    rooms = rooms.sort((a,b) => a.data.order - b.data.order)
    console.log(rooms);
    res.render("pages/andar1", { rooms: rooms });
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
    rooms = rooms.sort((a,b) => a.data.order - b.data.order)
    console.log(rooms);
    res.render("pages/andar2", { rooms: rooms });
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

/*router.post('/logar', (req, res) => {
    let post = {
        academicId: req.body.academicId,
        password: req.body.password
    }
    if (authUser(post.academicId, post.password)) {
        authentication = { valid: true }
    } else {
        authentication = { valid: false }
    }
})*/

module.exports = router;
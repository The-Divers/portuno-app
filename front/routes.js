const express = require("express");
const router = express.Router();
const { rooms, getRoomsByPosition } = require('./model/rooms')

// let authentication = null
router.use(express.static('public'));

router.get('/', (req, res) => {
    res.render("pages/login");
});

router.get('/home', (req, res) => {
    res.render("pages/home", { rooms, getRoomsByPosition });
});

router.get('/andar1', (req, res) => {
    res.render("pages/andar1", { rooms, getRoomsByPosition });
});

router.get('/andar2', (req, res) => {
    res.render("pages/andar2", { rooms, getRoomsByPosition });
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
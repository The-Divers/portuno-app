const express = require("express");
const router = express.Router();

//Importe cada uma das funcoes presentes no arquivo de modulo users.js
// const {insertUsers,insertUser,delUser,listUsers,findUser} = require("./model/users");

router.use(express.static('public'));

router.get('/', (req, res) => {
    res.render("pages/login");
});

router.get('/home', (req, res) => {
    res.render("pages/home");
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

/*router.get('/listUsers',(req,res)=>{
    res.render('./crud/listUsers',{listUsers: listUsers()});

});

router.get('/delUser',(req,res)=>{

    let target = req.query.nome;
    let list = delUser(target);

    res.render('./crud/delUser',{listUsers: list});
});*/

module.exports = router;
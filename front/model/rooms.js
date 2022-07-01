const axios = require("axios");

let keys = []
let rooms = []

const getRooms = axios.get('http://192.168.18.11:5000/api/rooms').then((data) => {
    data.data.forEach(el => {
        keys.push(el.id)
    });

    for (let i = 0; i < keys.length; i++) {
        axios.get(`http://192.168.18.11:5000/api/room/${keys[i]}`).then(data => {
            rooms.push(data.data)
        }).catch(err => {
            console.error("ocorreu um erro: " + err)
        })
    }

}).catch((err) => {
    console.error("Ocorreu um erro : " + err);
});

module.exports = {
    getRooms,
    rooms
}
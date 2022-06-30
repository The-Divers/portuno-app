const axios = require("axios");
let rooms = []
axios.get('http://192.168.18.11:5000/api/rooms').then((data) => {
    data.data.forEach(el => {
        rooms.push(el)
    });
}).catch((err) => {
    console.error("Ocorreu um erro : " + err);
});

let listStatus = []
axios.get(`http://192.168.18.11:5000/api/room${rooms.forEach(room => room.id)}`).then((data) => {
    data.forEach(el => {
        listStatus.push(el)
    });
}).catch((err) => {
    console.error("Ocorreu um erro : " + err);
});
module.exports = {
    rooms,
    listStatus
}
const axios = require("axios");


async function getRooms() {
    const response = await axios.get('http://localhost:8080/api/rooms');
    return response.data;
}

async function getOneRoom(id){
    const response = await axios.get(`http://localhost:8080/api/room/${id}`);
    return response.data;
}

module.exports = {
    getRooms: getRooms,
    getOneRoom: getOneRoom
}
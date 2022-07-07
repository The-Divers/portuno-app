const axios = require("axios");

async function getRooms() {
    try {
        const response = await axios.get('http://localhost:8080/api/rooms');
        return response.data;
    } catch (error) {
        return null;
    }

}

async function getOneRoom(id) {
    try {
        const response = await axios.get(`http://localhost:8080/api/room/${id}`);
        return response.data;
    } catch (error) {
        return null;
    }
}

async function updateRoom(id, data) {
    try {
        const response = await axios.put(`http://localhost:8080/api/room/${id}`, data);
        return response.data;
    } catch (error) {
        return null;
    }
}
module.exports = {
    getRooms,
    updateRoom
}
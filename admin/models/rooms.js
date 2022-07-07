const axios = require("axios");

async function getRooms() {
    const response = await axios.get('http://localhost:8080/api/rooms');
    return response.data;
}

module.exports = {
    getRooms
}
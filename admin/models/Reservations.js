const axios = require("axios");

async function getReservations() {
    try {
        const response = await axios.get('http://localhost:8080/api/reservations');
        return response.data
    }catch(error){
        return null
    }
       
}

module.exports = {
    getReservations
}
const axios = require("axios");

async function getReservations() {
    try {
        const response = await axios.get('http://localhost:8080/api/reservations');
        return response.data
    }catch(error){
        return null
    }  
}

async function getOneReservation(id) {
    try {
        const response = await axios.get(`http://localhost:8080/api/reservation/${id}`);
        return response.data
    }catch(error){
        return null
    }
       
}

async function updateReservation(id, data) {
    try {
        const response = await axios.put(`http://localhost:8080/api/reservation/${id}`, data);
        return response
    }catch(error){
        return null
    }
       
}

module.exports = {
    getReservations,
    getOneReservation,
    updateReservation
}
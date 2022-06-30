class Reservation {
    //Definição de classe com atributos
    constructor(id, userId, userName, roomId, roomName, reservationStatus, checkin, checkout) {

        this.id = id;
        this.userId = userId;
        this.userName = userName;
        this.roomId = roomId;
        this.roomName = roomName;
        this.reservationStatus = reservationStatus;
        this.checkin = checkin;
        this.checkout = checkout;
    }
}


//Exportar classe
module.exports = Reservation
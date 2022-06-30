class Room {
    //Definição de classe com atributos
    constructor(id, name, fullName, position, roomType, roomStatus, roomCapacity, contains, userOccupying) {

        this.id = id;
        this.name = name;
        this.fullName = fullName;
        this.position = position;
        this.roomType = roomType;
        this.roomStatus = roomStatus;
        this.roomCapacity = roomCapacity;
        this.contains = contains
        this.userOccupying = userOccupying;
    }
}


//Exportar classe
module.exports = Room
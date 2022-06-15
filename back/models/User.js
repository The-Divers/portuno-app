class User {
    //Definição de classe com atributos
    constructor(id, academicId, name, email, phoneNumber, userType) {
        this.id = id;
        this.academicId = academicId;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.userType = userType;
    }
}

//Exportar classe
module.exports = User
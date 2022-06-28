let users = [
    {
        id: 1,
        name: "Wellington Sarmento",
        academicId: "175375",
        password: "starwars",
        email: "wwelignton@virtual.ufc",
        phoneNumber: "85 9193929596",
        userType: "professor"
    },
    {
        id: 2,
        name: "Henrique Pequeno",
        academicId: "777777",
        password: "pequenohenrique",
        email: "henriquepequeno@virtual.ufc",
        phoneNumber: "85 997342535",
        userType: "professor"
    },
    {
        id: 3,
        name: "João Victor Alves",
        academicId: "509697",
        password: "titualves",
        email: "joaovba2002@alu.ufc",
        phoneNumber: "85 92136733",
        userType: "aluno"
    },
    {
        id: 4,
        name: "Vládia Helen Farias",
        academicId: "511115",
        password: "assistajojo",
        email: "vladiaff@alu.ufc",
        phoneNumber: "85 111111111",
        userType: "aluno"
    }
];

function insertUsers(paramUsers) {
    for (let cont = 0; cont < paramUsers.length; cont++) {
        users.push(paramUsers[cont]);
    }
}

function insertUser(user) {
    users.push(user);
}

function findName(nUser) {
    for (let cont = 0; cont < users.length; cont++) {
        if (users[cont].name === nUser) {
            return cont;
        } else {
            return null;
        }
    }
}

function delUser(nUser) {
    let idUser = findName(nUser);

    if (idUser != null) {
        users.splice(idUser, 1);
        return users;
    } else {
        return "";
    }
}

function listUsers() {
    return users;
}
function findUser(nDate) {
    //find a user per Date
}
module.exports = { insertUsers: insertUsers, insertUser: insertUser, delUser: delUser, listUsers: listUsers, findUser: findUser };
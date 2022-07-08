let users = [
    {
        uid: 509697,
        name: "João Victor Barroso Alves",
        password: "Jv4984538171",
        email: "joaovba2002@alu.ufc",
        phoneNumber: "85 992136733",
        userType: "aluno"
    },
    {
        uid: 5171453,
        name: "Wellignton Wagner Sarmento",
        password: "wwagner33",
        email: "wwagner33@virtual.ufc",
        phoneNumber: "85 992538830",
        userType: "professor"
    }

];

//Autenticação
function authenticationUser(uid, password) {
    let authUser = null
    users.forEach(user => {
        if (user.uid == uid && user.password == password) {
            authUser = user
        }
    });
    return authUser
}

//CRUD
function createUser(user) {
    users.push(user);
}
function readUsers() {
    return users;
}

module.exports = { users, authenticationUser, readUsers, createUser };
let users = [
    {
        id: 1234567,
        name: "Monaliza Menezes",
        password: "admin",
        email: "monaliza@virtual.ufc.br",
        phoneNumber: "(85)9988776655",
        userType: "admin"
    }
];

let userApp = {
    uid: 1234567,
    name: "Monaliza Menezes",
    password: "admin",
    email: "monaliza@virtual.ufc.br",
    phoneNumber: "(85)9988776655",
    userType: "admin"
}

// function authentication(user) {
//     return {
//         uid: user.id,
//         name: user.name,
//         password: user.password,
//         email: user.email,
//         phoneNumber: user.phoneNumber,
//         userType: user.userType
//     }
// }

module.exports = { users, userApp };
let users = [
    {
        id: 509697,
        name: "João Victor Alves",
        password: "Jv123456",
        email: "joaovba2002@alu.ufc",
        phoneNumber: "(85)992136733",
        userType: "aluno"
    }
];

let userApp = {
    uid: 509697,
    name: "João Victor Alves",
    password: "Jv123456",
    email: "joaovba2002@alu.ufc",
    phoneNumber: "(85)992136733",
    userType: "aluno"
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
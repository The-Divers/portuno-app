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

function authUser(academicId, password) {
    let auth = 0
    users.forEach(user => {
        if (user.academicId == academicId && user.password == password) {
            auth++;
        }
    })
    return (auth > 0 ? true : false)
}

//CRUD
function createUser(user) {
    users.push(user);
}
function readUsers() {
    return users;
}

module.exports = { users, authUser, readUsers, createUser };
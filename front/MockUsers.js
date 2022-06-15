// BASE DE DADOS 
let users = [
  {
    id: 1,
    name: "Wellington Sarmento",
    academicId: "175375",
    password:"starwars",
    email: "wwelignton@virtual.ufc",
    phoneNumber: "85 9193929596",
    userType: "professor"
  },
  {
    id: 2,
    name: "Henrique Pequeno",
    academicId: "777777",
    password:"pequenohenrique",
    email: "henriquepequeno@virtual.ufc",
    phoneNumber: "85 997342535",
    userType: "professor"
  },
  {
    id: 3,
    name: "João Victor Alves",
    academicId: "509697",
    password:"titualves",
    email: "joaovba2002@alu.ufc",
    phoneNumber: "85 92136733",
    userType: "aluno"
  },
  {
    id: 4,
    name: "Vládia Helen Farias",
    academicId: "511115",
    password:"assistajojo",
    email: "vladiaff@alu.ufc",
    phoneNumber: "85 111111111",
    userType: "aluno"
  },
]
function validaLogin(){
  
}
//LÓGIGICA DE VALIDAÇÃO DO LOGIN
let idAcademico = document.getElementById("idAcademico")
let senha = document.getElementById("senha")
let btn = document.getElementById("btnLogar")
let form = document.getElementById("loginForm")

// Autenticacao
let idAutenticado = false
let senhaAutenticada = false

btn.addEventListener('click', () => {
    users.forEach(element => {
        if (idAcademico.value == element.academicId && senha.value == element.password) {
            idAutenticado = true
            senhaAutenticada = true
        }
    });
    if (idAutenticado && senhaAutenticada) {
        window.location.href = "index.html?auth=true"
    } else {
        window.location.href = "index.html?auth=false"
    }
});

let aviso = document.getElementById("aviso")
  let url = window.location.href;
  let auth = url.split('login.html?auth=');
  console.log(auth)

if(auth[1] === "false"){
  aviso.style.color = "#f04747"
  aviso.innerText = "Matrícula ou senha incorreta"
}
const rooms = [
  {
    name: "Fablearn",
    fullName: "Laboratório de Fablearn",
    position: 0,
    status: "disponível",
    roomType: "sala temática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor","01 câmera filmadora"],
    userOccupying: null
  },
  {
    name: "Sala 01",
    fullName: "Sala 01",
    position: 0,
    status: "ocupado",
    roomType: "sala de aula",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor"],
    userOccupying: "José Aires"
  },
  {
    name: "Sala 02",
    fullName: "Sala 02",
    position: 0,
    status: "disponível",
    roomType: "sala de aula",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor"],
    userOccupying: null
  },
  {
    name: "Ateliê",
    fullName: "Ateliê",
    position: 0,
    status: "ocupado",
    roomType: "sala temática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor"],
    userOccupying: "Liandro Roger"
  },
  {
    name: "Sala 03",
    fullName: "Sala 03",
    position: 0,
    status: "disponível",
    roomType: "sala temática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor"],
    userOccupying: null
  },
  {
    name: "Sala 05",
    fullName: "Sala 05",
    position: 0,
    status: "ocupado",
    roomType: "sala de aula",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor"],
    userOccupying: "Fernando Lincoln"
  },
  {
    name: "Sala 04",
    fullName: "Sala 04",
    position: 0,
    status: "disponível",
    roomType: "sala de aula",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor"],
    userOccupying: null
  },
  {
    name: "Tecno.",
    fullName: "Laboratório de Tecnodocência",
    position: 0,
    status: "disponível",
    roomType: "sala temática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor"],
    userOccupying: null
  },
  {
    name: "Usab.",
    fullName: "Laboratório de Usabilidade",
    position: 0,
    status: "disponível",
    roomType: "sala temática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor"],
    userOccupying: null
  },
  {
    name: "Lab. 01",
    fullName: "Laboratório 01",
    position: 1,
    status: "ocupado",
    roomType: "laboratório de informática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor", "20 computadores"],
    userOccupying: "Geogre Allan"
  },
  {
    name: "Lab. 04",
    fullName: "Laboratório 04",
    position: 1,
    status: "ocupado",
    roomType: "laboratório de informática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor", "01 câmera filmadora", "20 computadores"],
    userOccupying: "Wellington Sarmento"
  },
  {
    name: "Lab. 02",
    fullName: "Laboratório 02",
    position: 1,
    status: "ocupado",
    roomType: "laboratório de informática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor", "20 computadores"],
    userOccupying: "Mara Bonates"
  },
  {
    name: "Lab. 05",
    fullName: "Laboratório 05",
    position: 1,
    status: "ocupado",
    roomType: "laboratório de informática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor", "20 computadores"],
    userOccupying: "Melo Júnior"
  },
  
  {
    name: "Lab. 03",
    fullName: "Laboratório 03",
    position: 1,
    status: "ocupado",
    roomType: "laboratório de informática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor", "20 computadores"],
    userOccupying: "Cátia Silva"
  },
  {
    name: "Lab. 06",
    fullName: "Laboratório 06",
    position: 1,
    status: "disponível",
    roomType: "laboratório de informática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor", "20 computadores"],
    userOccupying: null
  },
  {
    name: "Lab. Jogos",
    fullName: "Laboratório de Jogos",
    position: 1,
    status: "disponível",
    roomType: "laboratório temático",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor"],
    userOccupying: null
  },
  {
    name: "P&D 1",
    fullName: "P&D 1",
    position: 1,
    status: "disponível",
    roomType: "laboratório de informática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor", "20 computadores"],
    userOccupying: null
  },
  {
    name: "Comp. Fís",
    fullName: "Laboratório de Computação Física",
    position: 1,
    status: "ocupado",
    roomType: "laboratório temático",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor", "05 computadores", "01 impressora 3D"],
    userOccupying: "Clemilson Santos"
  },
  {
    name: "P&D 2",
    fullName: "P&D 2",
    position: 1,
    status: "disponível",
    roomType: "laboratório de informática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor", "20 computadores"],
    userOccupying: null
  },
  {
    name: "Pós-Grad",
    fullName: "Sala da Pós Graduação",
    position: 1,
    status: "disponível",
    roomType: "sala de aula",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor"],
    userOccupying: null
  },
  {
    name: "Lab. Sist",
    fullName: "Laboratório de Sistemas",
    position: 1,
    status: "ocupado",
    roomType: "laboratório de informática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor", "20 computadores"],
    userOccupying: "Ticiana Linhares"
  },
  {
    name: "Reuniões",
    fullName: "Sala de Reuniões",
    position: 2,
    status: "ocupado",
    roomType: "sala temática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor"],
    userOccupying: "Gabriel Palliard"
  },
  {
    name: "Audivisual",
    fullName: "Sala de Audivisual",
    position: 2,
    status: "disponível",
    roomType: "sala temática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor"],
    userOccupying: null
  },
  {
    name: "Professores",
    fullName: "Sala dos Professores",
    position: 2,
    status: "ocupado",
    roomType: "sala temática",
    roomCapacity: "25 carteiras",
    contains: ["01 projetor"],
    userOccupying: "Rafael do Carmo"
  }
];

function mudaAndar(x){
  if(x == 0){
    window.location.href = "home.html";
  }else if(x == 1){
    window.location.href = "andar1.html";
  }else{
    window.location.href = "andar2.html";
  }
}
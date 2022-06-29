const rooms = [
    {
        id: 1,
        name: "Fablearn",
        fullName: "Lab de Fablearn",
        position: 0,
        status: "disponível",
        roomType: "sala temática",
        roomCapacity: "25 carteiras",
        contains: ["01 projetor", "01 câmera filmadora"],
        userOccupying: null
    },
    {
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
        name: "Tecno.",
        fullName: "Lab de Tecnodocência",
        position: 0,
        status: "disponível",
        roomType: "sala temática",
        roomCapacity: "25 carteiras",
        contains: ["01 projetor"],
        userOccupying: null
    },
    {
        id: 9,
        name: "Usab.",
        fullName: "Lab de Usabilidade",
        position: 0,
        status: "disponível",
        roomType: "sala temática",
        roomCapacity: "25 carteiras",
        contains: ["01 projetor"],
        userOccupying: null
    },
    {
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
        name: "Lab. Jogos",
        fullName: "Lab de Jogos",
        position: 1,
        status: "disponível",
        roomType: "laboratório temático",
        roomCapacity: "25 carteiras",
        contains: ["01 projetor"],
        userOccupying: null
    },
    {
        id: 17,
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
        id: 18,
        name: "Comp. Fís",
        fullName: "Lab de Comp. Física",
        position: 1,
        status: "ocupado",
        roomType: "laboratório temático",
        roomCapacity: "25 carteiras",
        contains: ["01 projetor", "05 computadores", "01 impressora 3D"],
        userOccupying: "Clemilson Santos"
    },
    {
        id: 19,
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
        id: 20,
        name: "Pós-Grad",
        fullName: "Sala da Pós Grad.",
        position: 1,
        status: "disponível",
        roomType: "sala de aula",
        roomCapacity: "25 carteiras",
        contains: ["01 projetor"],
        userOccupying: null
    },
    {
        id: 21,
        name: "Lab. Sist",
        fullName: "Lab de Sistemas",
        position: 1,
        status: "ocupado",
        roomType: "laboratório de informática",
        roomCapacity: "25 carteiras",
        contains: ["01 projetor", "20 computadores"],
        userOccupying: "Ticiana Linhares"
    },
    {
        id: 22,
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
        id: 23,
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
        id: 24,
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

function getRoomsByPosition(position) {
    let roomsByPosition = []
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].position == position) {
            roomsByPosition.push(rooms[i]);
        }
    }
    return roomsByPosition;
}

module.exports = { 
    rooms, 
    getRoomsByPosition
}
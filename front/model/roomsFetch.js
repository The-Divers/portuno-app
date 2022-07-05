let keys = []
let rooms = []

try {
    fetch("http://localhost:8080/api/rooms").then(res => res.json()).then(data => {
        data.forEach(data => {
            keys.push(data.id)
        });

        for (let i = 0; i < keys.length; i++) {
            fetch(`http://localhost:8080/api/room/${keys[i]}`).then(res => res.json()).then(data => {
                rooms.push(data)
            })
        }
    }
    );
} catch (error) {
    console.error("Ocorreu um erro: " + error)
}
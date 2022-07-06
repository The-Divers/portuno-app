function trocaSala(andar) {
    if (andar == 0) {
        window.location.href = 'home'
    } else {
        window.location.href = `andar${andar}`
    }
}
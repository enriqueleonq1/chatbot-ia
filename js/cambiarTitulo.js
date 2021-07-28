function obtenerFormulario() {
    return JSON.parse(localStorage.getItem("reserva"))
}

function cambiarTitulo() {
    const titulo = document.querySelector("#titulo1")
    const nombrePersona = obtenerFormulario().nombre
    titulo.innerHTML = `<h1>Reservación para ${nombrePersona}</h1>`
}

cambiarTitulo()
function cambiarPagina() {
    const inputNombre = document.querySelector("#nombre")
    const inputTipo = document.querySelector("#tipo")
    const inputOrigen = document.querySelector("#origen")
    const inputDestino = document.querySelector("#destino")
    if( inputNombre.value != "" ) {
        guardarFormularioLocalStorage(inputNombre, inputTipo, inputOrigen, inputDestino)
        window.location = "reserva.html"
    }else {
        alert("Debe ingresar su nombre antes de realizar una cotización")
    }  
}

function guardarFormularioLocalStorage( nombre, tipo, origen, destino) {
    //Creamos el objeto con los datos a filtrar de la reserva
    const infoReserva = {
        nombre: nombre.value,
        tipo: tipo.value,
        origen: origen.value,
        destino: destino.value
    }

    //Eliminamos la informacion del localstorage
    localStorage.removeItem("reserva")

    //Guardamos la nueva informacion
    localStorage.setItem("reserva", JSON.stringify(infoReserva))
}

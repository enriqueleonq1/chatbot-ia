function agregarReservaHotel( evt ) {
    const locacion = JSON.parse(localStorage.getItem("reserva"))
    fetch(`https://sheet.best/api/sheets/a9129bc1-c204-4fd4-861d-ece172f6d41b/tabs/Hotel`)
        .then((response) => response.json())
        .then((datos) => {
            const info = datos[evt]
            const numeroCliente = Math.floor( Math.random()*(50000000 + 1))
            const nombre = prompt("Ingrese su nombre")
            const apellido = prompt("Ingrese su apellido")
            const email = prompt("Ingrese su email")
            const fechaEntrada = prompt("Ingrese de la forma DD/MM/AA (Dia/Mes, Año) de la fecha de entrada al Hotel")
            const fechaSalida = prompt("Ingrese la fecha de salida del hotel. En formato (DD/MM/AA) (Dia/Mes/Año)")
            const reserva = "HOTEL"
            const ciudadHotel = info.UbicacionHotel
            const nombreHotel = info.HotelesDisponible

            const data = {
                NumeroCliente: numeroCliente,
                Nombres: nombre,
                Apellidos: apellido,
                CiudadOrigen: locacion.origen,
                CiudadDestino: locacion.destino,
                Email: email,
                Reserva: reserva,
                Fecha: fechaEntrada,
                FechaSalida: fechaSalida,
                CiudadHotel: ciudadHotel,
                Hotel: nombreHotel
            }

            cargarASheet(data)
        })
        .catch((error) => {
            console.error(error);});
}

function agregarReservaVuelo( evt ) {
    const numeroCliente = Math.floor( Math.random()*(50000000 + 1))
    const locacion = JSON.parse(localStorage.getItem("reserva"))
    const nombre = prompt("Ingrese su nombre")
    const apellido = prompt("Ingrese su apellido")
    const email = prompt("Ingrese su email")
    const fecha = prompt("Ingrese la fecha")
    const reserva = "VUELO"
    const data = {
        NumeroCliente: numeroCliente,
        Nombres: nombre,
        Apellidos: apellido,
        CiudadOrigen: locacion.origen,
        CiudadDestino: locacion.destino,
        Email: email,
        Reserva: reserva,
        Fecha: fecha,
    }
    cargarASheet(data)
}
function cargarASheet( data ) {
    fetch("https://sheet.best/api/sheets/a9129bc1-c204-4fd4-861d-ece172f6d41b", {
        method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
  },
    body: JSON.stringify(data),
    })
    .then((r) => r.json())
    .then((data) => {
    // Respuesta de la API
    alert("Reserva agregada exitosamente")
  })
  .catch((error) => {
    // Errores
    console.log(error);
  });

}
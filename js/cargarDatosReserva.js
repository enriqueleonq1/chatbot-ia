const almacenamiento = obtenerFormulario()

function consultaApiGoogleSheet( tipo ) {
    //Llamada A API de google sheets
    if( tipo == "vuelo") {
        fetch("https://sheet.best/api/sheets/a9129bc1-c204-4fd4-861d-ece172f6d41b/tabs/Vuelos")
        .then((response) => response.json())
        .then((datos) => {
            cargarDatosVuelo( datos )
        })
        .catch((error) => {
            console.error(error);
        });
    } else {
        fetch(`https://sheet.best/api/sheets/a9129bc1-c204-4fd4-861d-ece172f6d41b/tabs/Hotel`)
        .then((response) => response.json())
        .then((datos) => {
            cargarDatosHotel( datos )
        })
        .catch((error) => {
            console.error(error);
    });
    }
    
}

function obtenerFormulario() {
    return JSON.parse(localStorage.getItem("reserva"))
}

function cargarDatosVuelo( datos ) {
    const divVuelos = document.querySelector("#info")
    divVuelos.innerHTML = ""

    for(i=0; i < datos.length; i++) {
        if( almacenamiento.origen == datos[i].VueloOrigen && almacenamiento.destino == datos[i].VueloDestino) 
            agregarDivVuelo(datos[i], divVuelos, i)
    }
}

function cargarDatosHotel( datos ) {
    const divHotel = document.querySelector("#info")
    divHotel.innerHTML = ""

    for(i=0; i < datos.length; i++) {
        if( almacenamiento.destino == datos[i].UbicacionHotel) 
            agregarDivHotel(datos[i], divHotel, i)
    }
}

function agregarDivHotel( datos, div, id) {
    const boxInfoDiv = document.createElement("div")
    boxInfoDiv.classList.add("col-lg-4","col-md-4","col-sm-6")
    boxInfoDiv.innerHTML = `
                    <a href="#" class="fh5co-card-item">
						<div class="fh5co-text" id=${id}>
							<h2>Nombre: ${datos.HotelesDisponible}</h2>
                            <h2>Ubicación: ${datos.UbicacionHotel}</h2>
							<p>Precio por Noche: ${datos.PrecioNoche}</p>
							<p><span class="btn btn-primary" onclick="agregarReservaHotel(${id})">Reservar</span></p>
						</div>
					</a>
    `
    div.appendChild( boxInfoDiv )
}

function agregarDivVuelo( datos, div, id ) {
    const boxInfoDiv = document.createElement("div")
    boxInfoDiv.classList.add("col-lg-4","col-md-4","col-sm-6")
    boxInfoDiv.innerHTML = `
                    <a href="#" class="fh5co-card-item">
						<div class="fh5co-text" id=${id}>
							<h2>Origen: ${datos.VueloOrigen}</h2>
                            <h2>Destino: ${datos.VueloDestino}</h2>
							<p>Precio: ${datos.Precio}</p>
							<p><span class="btn btn-primary" onclick="agregarReservaVuelo(${id})">Reservar</span></p>
						</div>
					</a>
    `
    div.appendChild( boxInfoDiv )
}

consultaApiGoogleSheet( almacenamiento.tipo )


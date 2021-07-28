//Funcionar para agregar los datos en la pagina web
function consultaApiGoogleSheet() {
    //Llamada A API de google sheets
    fetch("https://sheet.best/api/sheets/a9129bc1-c204-4fd4-861d-ece172f6d41b/tabs/Informacion")
        .then((response) => response.json())
        .then((datos) => {
            agregarDatosPaginaOrigen( datos )
            agregarDatosPaginaDestino( datos )
        })
        .catch((error) => {
            console.error(error);
    });
}

//Funcion para agregar datos en la pagina de Origen
function agregarDatosPaginaOrigen( datos ) {
    const div = document.querySelector("#origen")
    let setElementos = new Set()
    let arrayElementos 
    //Agregando elementos al set
    for(i = 0; i < datos.length; i++) {
        setElementos.add(datos[i].VueloOrigen)
    }
    //Pasando los elementos del set al array
    arrayElementos = Array.from(setElementos)
    for(i = 0; i < arrayElementos.length; i++) {
        let opcion = document.createElement("option")
        opcion.innerText = arrayElementos[i]
        div.appendChild( opcion )    
    }
}

//Funcion para agregar datos en la pagina de destino
function agregarDatosPaginaDestino( datos ) {
    const div = document.querySelector("#destino")
    let setElementos = new Set()
    let arrayElementos 
    //Agregando elementos al set
    for(i = 0; i < datos.length; i++) {
        setElementos.add(datos[i].VueloDestino)
    }
    //Pasando los elementos del set al array
    arrayElementos = Array.from(setElementos)
    for(i = 0; i < arrayElementos.length; i++) {
        let opcion = document.createElement("option")
        opcion.innerText = arrayElementos[i]
        div.appendChild( opcion )    
    }
}

function eliminarRepetidos(value, index, self) { 
    return self.indexOf(value) === index;
}

consultaApiGoogleSheet();

function estoEsUnaPrueba() {
    alert("Le diste al alert")
}
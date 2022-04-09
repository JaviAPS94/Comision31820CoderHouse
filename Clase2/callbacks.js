// const ejecutar = unaFuncion => unaFuncion();

// const saludar = () => console.log('saludos');

// ejecutar(saludar);

function escribirYLoguear(texto, callbackParaLoguear) {
    // simlación de escribir un archivo
    console.log(texto);
    // cuando finalice, ejecutamos el callback
    callbackParaLoguear('archivo procesado con éxito');
}

escribirYLoguear('Hola estoy usando callbacks', (mensajeParaLoguear) => {
    const fecha = new Date().toLocaleDateString();
    console.log(`${fecha}: ${mensajeParaLoguear}`);
})


const ejecutar = (param1, param2, param3, callbackUnaFuncion) => {
    
}

const saludar = () => console.log('saludos');

ejecutar(saludar);


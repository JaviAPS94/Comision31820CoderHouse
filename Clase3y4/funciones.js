function test() {
    console.log('Hola estamos en la tercera clase');
}
test();

const funcionFlecha = (param, param2, param3) => {
    console.log(`He recibido el parámetro ${param}`);
}

funcionFlecha('Alex');

const funcionUnSoloParametro = param => {
    const a = 1;
    const b = 1;
    const resultado = a * b;
    return resultado;
}

funcionUnSoloParametro('Alex');

const funcionUnaSolaLineaEjecucion = (a, b) => (a * b);
console.log(funcionUnaSolaLineaEjecucion(2, 2))

const funcionObjeto = () => ({
    nombre: 'Alex',
    edad: 27
});

console.log(funcionObjeto());


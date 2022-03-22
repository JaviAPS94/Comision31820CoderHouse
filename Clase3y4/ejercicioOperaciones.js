const operacion = (a, b, callbackOperacion) => callbackOperacion(a, b);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

console.log(operacion(5, 3, suma));
console.log(operacion(5, 3, resta));
console.log(operacion(5, 3, multiplicacion));
console.log(operacion(5, 3, division));
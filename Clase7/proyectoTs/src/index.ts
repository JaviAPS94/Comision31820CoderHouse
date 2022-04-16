import * as operaciones from './lib/operaciones';

const mensage: string = 'Hola mundo estoy trabajando con typescript';
console.log(mensage);

let number1: number = 20, number2: number = 5;

console.log(`La suma de ${number1} + ${number2} es ${operaciones.sumar(number1, number2)}`);
console.log(`La resta de ${number1} - ${number2} es ${operaciones.restar(number1, number2)}`);
console.log(`La multiplicación de ${number1} * ${number2} es ${operaciones.multiplicar(number1, number2)}`);
console.log(`La división de ${number1} / ${number2} es ${operaciones.dividir(number1, number2)}`);
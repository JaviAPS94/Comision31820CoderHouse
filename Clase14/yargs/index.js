const yargs = require('yargs/yargs')(process.argv.slice(2));

const args = yargs.argv;

console.log(args);

//Default
const args2 = yargs.default({
    nombre: 'pepe',
    apellido: 'default'
}).argv

//Alias
const args3 = yargs.alias({
    n: 'nombre',
    a: 'apellido'
}).argv

//Boolean
const arg4 = yargs.boolean('debug').argv

console.log(args3);
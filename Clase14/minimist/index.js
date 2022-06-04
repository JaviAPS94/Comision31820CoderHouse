const parseArgs = require('minimist');

//Primer ejemplo
// const args = parseArgs(process.argv.slice(2));

//Segundo ejemplo
console.log(parseArgs(['1', '2', '3', '4']));

console.log(parseArgs(['-p', '8080', '-b', '2', '3', '4']));

console.log(parseArgs(['--n1', '1', '--n2', '2', '3', '4']));

console.log(parseArgs(['-a', '1', '-b', '2', '--colores', '--cursiva']));

//Tercer ejemplo
const options = { default: { puerto: '8080', apellido: 'test' }, alias: { p: 'puerto', b: 'campoB' } }

console.log(parseArgs(['-p', '1', '-b', '2'], options));

const optionsAlias = { alias: { p: 'puerto', b: 'campoB' } }; 

console.log(parseArgs(['-p', '1', '-b', '2'], optionsAlias));

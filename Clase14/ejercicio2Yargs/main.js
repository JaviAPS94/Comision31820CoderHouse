const yargs = require('yargs/yargs')(process.argv.slice(2));

const args = yargs.default({
    modo: 'prod',
    puerto: 0,
    debug: false
}).alias({ m: 'modo', p: 'puerto', d: 'debug' })
    .argv

console.log(args);

DATABASE_URL
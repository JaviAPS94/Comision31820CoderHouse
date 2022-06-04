console.log('Directorio actual: ' + process.cwd())
console.log('Id del proceso: ' + process.pid)
console.log('Versión de node: ' + process.version)

// process.on('exit', (code) => {
//     console.log(code)
// });

// process.exit(-4)

// process.on('uncaughtException', (err) => {
//     console.log('Excepción tomada: ' + err);
// })

// noexiste();


console.log(process.execPath);
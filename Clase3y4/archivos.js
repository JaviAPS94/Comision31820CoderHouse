const fs = require('fs');

// const data = fs.readFileSync('text.txt', 'utf-8');
// console.log(data);

// try {
//     const data = fs.readFileSync('textsdfasdf.txt', 'utf-8');
//     console.log(data);
// } catch (error) {
//     console.log(`Hubo un error: ${error}`);
// }

// fs.writeFileSync('./pruebaEscritura.txt', 'Esto es una prueba de escritura segunda llamada\n');

// fs.appendFileSync('./pruebaEscritura.txt', 'Esto es una prueba append');

// fs.unlinkSync('./pruebaEscritura.txt');


// try {
//     fs.writeFileSync('fyh.txt', new Date().toLocaleString())
// } catch (error) {
//     throw new Error(`Error en escritura: ${error.message}`)
// }


// try {
//     const contenido = fs.readFileSync('4-fechaYHora.js', 'utf-8')
//     console.log(contenido)
// } catch (error) {
//     throw new Error(`Error en lectura: ${error.message}`)
// }


// fs.readFile('./text.txt', 'utf-8', (error, contenido) => {
//     if (error) {
//         throw new Error(`Error en la lectura: ${error}`);
//     }

//     console.log('lectura exitosa');
//     console.log(contenido);
// })

// fs.writeFile('./textAsync.txt', 'Texto asincrónico', error => {
//     if (error) {
//         throw new Error(`Error en la creacion: ${error}`);
//     } else {
//         console.log('archivo creado');
//     }
// })

// fs.appendFile('./textAsync.txt', 'Texto asincrónico', error => {
//     if (error) {
//         throw new Error(`Error en la actualiacion: ${error}`);
//     } else {
//         console.log('archivo creado');
//     }
// })

// fs.unlink('./textAsync.txt', error => {
//     if (error) {
//         throw new Error(`Error en la eliminación: ${error}`);
//     } else {
//         console.log('archivo eliminado');
//     }
// })

// fs.mkdir('./carpetaNueva', error => {
//     if (error) {
//         throw new Error(`Error en la creacion de carpeta: ${error}`);
//     } else {
//         console.log('carpeta creada');
//     }
// })

// fs.readdir('./', (error, nombres) => {
//     if (error) {
//         throw new Error(`Error en la lectura de carpeta: ${error}`);
//     } else {
//         console.log(nombres);
//     }
// })

// fs.readFile('package.json', 'utf-8', (error, contenido) => {
//     if (error) {
//         throw new Error(`Error en lectura: ${error}`)
//     }

//     console.log('package.json: lectura exitosa')

//     const info = {
//         contenidoStr: contenido,
//         contenidoObj: JSON.parse(contenido),
//         size: contenido.length
//     }

//     console.log(info)

//     fs.writeFile('info.txt', JSON.stringify(info, null, 2), error => {
//         if (error) {
//             throw new Error(`Error en escritura: ${error}`)
//         }
//         console.log('info.txt: escritura exitosa')
//     })
// })

// function readFile() {
//     fs.promises.readFile('./text.txt', 'utf-8')
//         .then(contenido => {
//             console.log(contenido);
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }

// readFile();


// async function readFileAsync() {
//     try {
//         const contenido = await fs.promises.readFile('./textasd.txt', 'utf-8');
//         console.log(contenido);
//     } catch (error) {
//         console.log(error);
//     }
// }

// readFileAsync();

async function ejercicio() {
    try {
        const contenido = await fs.promises.readFile('./info.txt', 'utf-8');
        const info = JSON.parse(contenido);
        console.log(info);

        info.contenidoObj.author = 'Alex';

        console.log("alex")
        console.log(info);

        await fs.promises.writeFile('./package.json.coder', JSON.stringify(info, null, 2));
    } catch (error) {
        console.log(error);
    }
}

ejercicio();

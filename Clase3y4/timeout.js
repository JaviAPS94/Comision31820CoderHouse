// function imprimirString(arg) {
//     console.log(`argumentos => ${arg}`);
// }

// setTimeout(imprimirString, 2000, 'Hola');

function mostrarLetras(palabra, termine) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < 4) {
            console.log(palabra[i]);
            i++;
        } else {
            clearInterval(interval);
            termine();
        }
    }, 1000)
}

const fin = () => console.log('terminé')

setTimeout(() => { mostrarLetras('hola', fin); }, 0)
setTimeout(() => { mostrarLetras('hola', fin); }, 250)
setTimeout(() => { mostrarLetras('hola', fin); }, 500)

// const interval = setInterval(() => {

//     for (let contador = 0; contador <= 5; contador++) {
//         console.log(`valor: ${contador}`);
//         if (contador == 4) {
//             clearInterval(interval);
//         }
//     }
// }, 2000);

// setInterval(imprimirString, 2000, 'Hola');
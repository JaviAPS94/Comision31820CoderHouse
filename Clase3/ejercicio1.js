const numeros = {}

function getAleatorio() {
    return parseInt(Math.random() * 20) + 1
}

for (let i = 0; i < 10000; i++) {
    const numero = getAleatorio(); 5
    if (!numeros[1]) {
        numeros[1] = 0
    }
    numeros[numero]++
}

console.log(numeros);
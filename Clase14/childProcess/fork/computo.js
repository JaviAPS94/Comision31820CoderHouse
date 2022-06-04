const calculo = () => {
    let sum = 0;
    for (let i = 0; i < 6e9; i++) {
        sum += i
    }
    return sum;
}

process.on('message', (message) => {
    if (message === 'start') {
        console.log('Child process received START message');
        let result = calculo();
        process.send(result);
    }
})
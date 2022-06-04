const array = [1,2,3,"test", true]


process.on('exit', (code) => {
    console.log(code);
})


function getResult(array) {
    const types = array.map(element => typeof(element));

    if (array.length === 0) {
        console.log(emptyError());
        process.exit(-4);
    }

    if (!validateDataType(types)) {
        console.log(dataTypeError(array, types));
        process.exit(-5);
    }

    return {
        datos: {
            numeros: array,
            promedio: promedio(array),
            max: Math.max(...array),
            min: Math.min(...array),
            ejecutable: process.execPath,
            pid: process.pid,
        }
    }
}

function promedio(values) {
    const sum = values.reduce((previous, current) => current += previous);
    const avg = sum / values.length;
    return avg;
}

function dataTypeError(values, valuesTypes) {
    return {
        error: {
            descripcion: 'error de tipo',
            numeros: values,
            tipos: valuesTypes
        }
    }
}

function emptyError() {
    return {
        error: {
            descripcion: 'entrada vacía'
        }
    }
}

function validateDataType(types) {
    for (const type of types) {
        if (type !== 'number') {
            return false;
        }
    }
    return true;
}

console.log(getResult(array));
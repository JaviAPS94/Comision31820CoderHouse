import express from 'express';
import faker from 'faker';
faker.locale = 'es';

const app = express();

// const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
// const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
// const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

// function getRandomElement(array) {
//     return array[Math.floor(array.length * Math.random())];
// }

function createCombination(id) {
    return {
        id,
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        color: faker.commerce.color()
    }
}

app.get('/test', (req, res) => {
    const registersNumber = Number(req.query.cant) || 10;
    res.json(Array.from(Array(registersNumber), (v, i) => createCombination(i + 1)))
    // const result = [];
    // for (let i = 0; i < 10; i++) {
    //     result.push(createCombination());
    // };
    // res.json(result);
});

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor http mocking escuchando en el puerto ${PORT}`);
});

server.on('error', error => console.log(`${error}`));

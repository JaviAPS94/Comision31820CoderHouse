const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1 style="color: blue">Bienvenidos al servidor express</h1>');
});

let visitas = 0;

app.get('/visitas', (req, res) => {
    res.send(`La cantidad de visitas es ${++visitas}`);
});

app.get('/fyh', (req, res) => {
    res.send({fyh: new Date().toLocaleString()});
});

const server = app.listen(8080, () => {
    console.log('servidor http en el puerto 8080');
});

server.on('error', error => console.log(`Error en el servidor ${error}`));
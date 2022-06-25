const express = require('express');
const compression = require('compression');

const app = express();

const message = 'Hola que tal';
const largeMessage = message.repeat(1000);

app.get('/saludo', (req, res) => {
    res.send(largeMessage);
});

app.get('/saludozip', compression(), (req, res) => {
    res.send(largeMessage);
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`);
})



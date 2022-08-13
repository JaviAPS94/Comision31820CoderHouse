const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;

const numeros = [];

app.get('/', (req, res) => {
    res.send({ FyH: new Date().toISOString() });
});

app.post('/ingreso', (req, res) => {
    numeros.push(req.body);
    res.send(req.body);
});

app.get('/egreso', (req, res) => {
    res.send(numeros);
});

app.listen(8080);
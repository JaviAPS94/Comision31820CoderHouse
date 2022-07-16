const express = require('express');
const funciones = require('ejemplonpmcoderhouseap31820');

const app = express();

app.get('/suma', (req, res) => {
    return res.json({
        suma: funciones.suma(Number(req.query.num1), Number(req.query.num2))
    });
});

app.listen(8080);

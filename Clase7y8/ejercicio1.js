const express = require('express')

const app = express()

const PORT = 8080

const frase = 'Hola mundo como estan';

app.get('/api/frase', (req, res) => {
    res.send(frase);
});

app.get('/api/letras/:num', (req, res) => {
    const num = parseInt(req.params.num);
    if (isNaN(num)) {
        return res.status(400).send( { error: 'El parámetro ingresado no es un numero'});
    }
    
    res.send(frase[num]);
});

app.get('/api/palabras/:num', (req, res) => {
    const param = req.params.num;
    const palabras = frase.split(' ');
    res.send(palabras[param]);
});

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
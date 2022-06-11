const express = require('express');

const app = express();

const PORT = parseInt(process.argv[2]) || 8080;

app.get('/datos', (req, res) => {
    console.log('Probando logs PM2');
    res.send(`Servidor en puerto ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`);
})

app.listen(PORT, err => {
    if (!err) console.log(`Servidor escuchando en puerto ${PORT} - PID ${process.pid}`);
})
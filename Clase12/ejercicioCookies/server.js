const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser('secret'));

app.use(express.json());

app.post('/cookies', (req, res) => {
    const { nombre, valor, tiempo } = req.body;

    if (!nombre || !valor) {
        return res.json({ error: 'falta nombre ó valor' })
    }

    if (tiempo) {
        res.cookie(nombre, valor, { signed: true, maxAge: 1000 * parseInt(tiempo) });
    } else {
        res.cookie(nombre, valor, { signed: true });
    }
    res.json({ proceso: 'Ok' });
});

app.get('/cookies', (req, res) => {
    res.json({ normales: req.cookies, firmadas: req.signedCookies });
})

app.delete('/cookies', (req, res) => {
    const { nombre } = req.query;
    if (nombre) {
        res.clearCookie(nombre);
        res.json({ proceso: 'Ok'});
    } else {
        res.json({ error: 'falta nombre'});
    }
})



const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`);
})
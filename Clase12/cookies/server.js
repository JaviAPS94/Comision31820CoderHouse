const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser('secret'));

app.post('/cookie', (req, res) => {
    res.cookie('server', 'express').send('Cookie set');
});

app.post('/cookie-expiration', (req, res) => {
    res.cookie('server2', 'express-expiration', { maxAge: 30000 }).send('Cookie set with expiration');
});

app.get('/cookie', (req, res) => {
    res.send(req.cookies.server);
});

app.get('/cookie-expiration', (req, res) => {
    res.send(req.cookies.server2);
});

app.post('/clr', (req, res) => {
    res.clearCookie('server').send('Cookie clear');
});

app.post('/signed-cookie', (req, res) => {
    res.cookie('signed', 'cookie', { signed: true }).send('Set signed cookie');
});

app.get('/signed-cookie', (req, res) => {
    res.json({ notSigned: req.cookies, signed: req.signedCookies });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`);
})
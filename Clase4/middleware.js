const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 8080;

function middleware(req, res, next) {
    req.miAporte1 = 'data middleware 1';
    next();
}

function middleware2(req, res, next) {
    req.miAporte2 = 'data middleware 2';
    next();
}

// app.use((req, res, next) => {
//     console.log('Time:', Date.now());
//     next();
// });

app.get('/api/message', middleware, (req, res) => {
    console.log(req.miAporte1);
    res.send({ msg: 'Hola' })
});

app.post('/api/message', middleware, middleware2, (req, res) => {
    console.log(req.miAporte1);
    console.log(req.miAporte2);
    res.send({ msg: 'Hola' })
});

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
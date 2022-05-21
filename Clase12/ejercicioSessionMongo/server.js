const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const MongoStore = require('connect-mongo');
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const app = express();
app.use(cookieParser());

app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://javiaps94:javiaps94@cluster0.rcf6c.mongodb.net/sesiones?retryWrites=true&w=majority',
        mongoOptions: advancedOptions
    }),
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 40000
    }
}));

const getSessionName = req => req.session.nombre ?? '';

app.get('/', (req, res) => {
    if (!req.session.contador) {
        req.session.nombre = req.query.nombre;
        req.session.contador = 1;
        res.send(`Te damos la bienvenida ${getSessionName(req)}`);
    } else {
        req.session.contador++;
        res.send(`${getSessionName(req)} visitaste la página ${req.session.contador} veces.`);
    }
});

app.get('/olvidar', (req, res) => {
    const mensaje = `Hasta luego ${getSessionName(req)}`;

    req.session.destroy(err => {
        if (err) {
            res.json({ error: 'olvidar', body: err });
        } else {
            res.send(mensaje);
        }
    })
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
});

app.on('error', error => console.log(`Error en servidor ${error}`));
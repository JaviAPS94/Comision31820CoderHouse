const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const redis = require('redis');
const client = redis.createClient(17160, 'redis-17160.c241.us-east-1-4.ec2.cloud.redislabs.com');

client.auth('J1gXukAm0WLYgx7SlG7QycFk5aRmpQLl', (error) => {
    if (error) throw err;
});

const connectRedis = require('connect-redis');
const RedisStore = connectRedis(session);

const app = express();
app.use(cookieParser());

app.use(session({
    store: new RedisStore({
        client: client,
        ttl: 300
    }),
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
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
            res.json({error: 'olvidar', body: err});
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
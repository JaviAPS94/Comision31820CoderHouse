const express = require('express');
const jwt = require('jsonwebtoken');

const PRIVATE_KEY = 'secret';
const usuarios = [];

function generateToken(user) {
    const token = jwt.sign({ data: user }, PRIVATE_KEY, { expiresIn: '24h' });
    return token;
}

function auth(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({
            error: 'Not authenticated'
        })
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
        if(err) {
            return res.status(403).json({
                error: 'not authorized'
            })
        }

        req.user = decoded.data;
        next();
    });
};

const app = express();

app.use(express.json());

app.post('/register', (req, res) => {
    const { nombre, password, direccion } = req.body;
    const existeUsuario = usuarios.find(usuario => usuario.nombre === nombre);

    if (existeUsuario) {
        return res.json({ error: 'ya existe ese usuario' });
    }

    const usuario = { nombre, password, direccion };

    usuarios.push(usuario);

    const access_token = generateToken(usuario);

    res.json({ access_token });
});

app.post('/login', (req, res) => {
    const { nombre, password } = req.body;

    const usuario = usuarios.find(usuario => usuario.nombre === nombre && usuario.password === password);

    if (!usuario) {
        return res.json({ error: 'credenciales inválidas' });
    }

    const access_token = generateToken(usuario);
    res.json({ access_token });
});

app.get('/datos', auth, (req, res) => {
    const usuario = usuarios.find(usuario => usuario.nombre === req.user.nombre);
    res.json(usuario);
});


const PORT = 8080;

app.listen(PORT, () => {
    console.log('server is running')
})



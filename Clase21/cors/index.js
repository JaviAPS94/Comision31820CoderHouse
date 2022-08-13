const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'https://example.com',
    optionsSuccessStatus: 200,
    methods: "GET, POST, PUT"
};

app.get('/', cors(corsOptions), (req, res) => {
    res.json({
        message: 'Hola mundo'
    })
})

app.post('/')

app.listen(8080);
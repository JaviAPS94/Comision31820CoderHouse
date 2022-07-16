import express from "express";

const app = express();

app.get('/', (req, res) => {
    return res.json('Hola mundo');
});

app.listen(8080);
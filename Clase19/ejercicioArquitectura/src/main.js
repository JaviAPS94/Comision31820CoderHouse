import express from 'express';

import routerOperaciones from './routes.js';

const app = express();
app.use(express.json());

app.use('/api/operaciones', routerOperaciones);

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log('UP');
});

server.on('error', error => console.error('Error en el servidor'));
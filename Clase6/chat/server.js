const express = require('express');
const { Server: IOServer } = require('socket.io');
const { Server: HttpServer } = require('http');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

httpServer.listen(8080, () => console.log('SERVER ON'));

const messages = [
    { author: 'Alejandro', text: 'Hola!!!' },
    { author: 'Julieth', text: 'Hola que tal!!!, como estas?' },
    { author: 'Gonzalo', text: 'Muy bien..!!!!' }
];

io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', messages);

    socket.on('new-message', message => {
        messages.push(message);
        io.sockets.emit('messages', messages);
    })
});
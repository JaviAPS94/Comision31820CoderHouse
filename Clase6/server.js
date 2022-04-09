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

const messages = [];

io.on('connection', (socket) => {
    console.log('Usuario conectado');
    // Envio de mensaje
    socket.emit('messages', messages);

    socket.on('message', data => {
        messages.push({ socketid: socket.id, message: data });
        io.sockets.emit('messages', messages);
    })
    
});

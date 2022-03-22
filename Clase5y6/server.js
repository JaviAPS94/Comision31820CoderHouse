const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hola mundo');
});

const PORT = 8080;

const connectServer = server.listen(PORT, () => {
    console.log(`El servidor http esta escuchando en el puerto 8080`);
});
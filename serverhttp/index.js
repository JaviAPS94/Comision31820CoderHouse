const http = require('http');

const getMessage = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
        return 'Buenos dias';
    } else if (hour >= 12 && hour <= 19) {
        return 'Buenas tardes';
    } else if ((hour >= 20 && hour <= 23) &&  (hour >= 0 && hour <= 5)) {
        return 'Buenas noches';
    }
};

const server = http.createServer((request, response) => {
    response.end(getMessage());
});

const PORT = 8080;

const connectServer = server.listen(PORT, () => {
    console.log(`El servidor http esta escuchando en el puerto 8080`);
});
const cluster = require('cluster');

const http = require('http');

const numCpu = require('os').cpus().length

if (cluster.isMaster) {
    console.log(`PID MASTER ${process.pid}`);

    for (let i = 0; i < numCpu; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hola mundo')
    }).listen(8080);
    console.log(`Worker ${process.pid} started`);
}
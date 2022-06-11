const express = require('express');
const cluster = require('cluster');

const app = express();

const numCpu = require('os').cpus().length;

if(cluster.isMaster) {
    console.log(numCpu);
    console.log(`PID MASTER ${process.pid}`);

    for(let i=0; i< numCpu; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
       console.log(`Worker ${worker.process.pid} died`);
       cluster.fork();
    });
} else {
    const PORT = parseInt(process.argv[2]) || 8080;
    
    app.get('/', (req, res) => {
        res.send(`Servidor en puerto ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`);
    })
    
    app.listen(PORT, err => {
        if(!err) console.log(`Servidor escuchando en puerto ${PORT} - PID ${process.pid}`);
    })
}
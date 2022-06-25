const winston = require('winston');

function buildProdLogger() {
    const prodLogger = winston.createLogger({
        transports: [
            new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
        ]
    });
    return prodLogger;
};

function buildDevLogger() {
    const prodLogger = winston.createLogger({
        transports: [
            new winston.transports.Console({ level: 'info' }),
        ]
    });
    return prodLogger;
};


const logger = (process.env.NODE_ENV === 'PROD') ? buildProdLogger() : buildDevLogger();

module.exports = logger;
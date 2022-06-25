const pino = require('pino')

function buildProdLogger() {
    const prodLogger = pino('debug.log');
    prodLogger.level = 'debug';
    return prodLogger;
}

function buildDevLogger() {
    const devLogger = pino();
    devLogger.level = 'info';
    return devLogger;
}


const logger = (process.env.NODE_ENV === 'PROD') ? buildProdLogger() : buildDevLogger();

module.exports = logger;

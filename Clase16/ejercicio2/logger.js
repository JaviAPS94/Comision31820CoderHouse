const log4js = require('log4js');

log4js.configure({
    appenders: {
        console: { type: 'console' },
        archivoErrores: { type: 'file', filename: 'errores.log ' },
        archivoDebug: { type: 'file', filename: 'debug.log ' },
        loggerConsola: { type: 'logLevelFilter', appender: 'console', level: 'info' },
        loggerArchivoErrores: { type: 'logLevelFilter', appender: 'archivoErrores', level: 'error' },
        loggerArchivoDebug: { type: 'logLevelFilter', appender: 'archivoDebug', level: 'debug' },
    },
    categories: {
        default: {
            appenders: ['loggerConsola'], level: 'all'
        },
        prod: {
            appenders: ['loggerArchivoErrores', 'loggerArchivoDebug'], level: 'all'
        }
    }
});

const logger = (process.env.NODE_ENV === 'PROD') ?
    log4js.getLogger('prod') : log4js.getLogger('default');

module.exports = logger
const log4js = require('log4js')

// trace 6
// debug 5
// info 4
// warn 3
// error 2
// fatal 1

// log4js.configure({
//     appenders: {
//         miLoggerConsole: { type: 'console' },
//         miLoggerFile: { type: 'file', filename: 'info.log' },
//         miLoggerFile2: { type: 'file', filename: 'info2.log' },
//     },
//     categories: {
//         default: { appenders: ['miLoggerConsole'], level: 'trace' },
//         consola: { appenders: ['miLoggerConsole'], level: 'debug' },
//         archivo: { appenders: ['miLoggerFile'], level: 'warn' },
//         archivo2: { appenders: ['miLoggerFile2'], level: 'info' },
//         todos: { appenders: ['miLoggerConsole', 'miLoggerFile', 'miLoggerFile2'], level: 'error' }
//     }
// });

log4js.configure({
    appenders: {
        console: { type: 'console' },
        archivo: { type: 'file', filename: 'info3.log' },
        loggerConsola: { type: 'logLevelFilter', appender: 'console', level: 'info' },
        loggerArchivo: { type: 'logLevelFilter', appender: 'archivo', level: 'error' },
    },
    categories: {
        default: { appenders: ['loggerConsola'], level: 'all' },
        custom: { appenders: ['loggerConsola', 'loggerArchivo'], level: 'all' }
    }
});

const loggerCustom = log4js.getLogger('custom');

loggerCustom.trace('Text trace');
loggerCustom.debug('Text debug');
loggerCustom.info('Text info');
loggerCustom.warn('Text warn');
loggerCustom.error('Text error');
loggerCustom.fatal('Text fatal');

// const loggerConsola = log4js.getLogger('archivo');

// loggerConsola.trace('Text trace');
// loggerConsola.debug('Text debug');
// loggerConsola.info('Text info');
// loggerConsola.warn('Text warn');
// loggerConsola.error('Text error');
// loggerConsola.fatal('Text fatal');

// const loggerConsola = log4js.getLogger('archivo2');

// loggerConsola.trace('Text trace');
// loggerConsola.debug('Text debug');
// loggerConsola.info('Text info');
// loggerConsola.warn('Text warn');
// loggerConsola.error('Text error');
// loggerConsola.fatal('Text fatal');




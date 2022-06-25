const winston = require('winston');

// silly 6
// debug 5
// verbose 4
// info 3
// warn 2
// error 1

const logger = winston.createLogger({
    level: 'warn',
    transports: [
        new winston.transports.Console({ level: 'verbose' }),
        new winston.transports.File({ filename: 'info.log', level: 'error' })
    ]
});

// logger.log('silly', 'log silly');
// logger.log('debug', 'log debug');
// logger.log('verbose', 'log verbose');
// logger.log('info', 'log info');
// logger.log('warn', 'log warn');
// logger.log('error', 'log error');

logger.info('log info');
logger.debug('log debug');
logger.error('log error');
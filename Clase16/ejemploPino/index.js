const logger = require('pino')()

logger.info('pino info');
logger.error('pino error');

logger.info({ a: 42 }, 'Hola mundo info');
logger.info('La respuesta es %d', 42);
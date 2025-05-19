// console.log('Info message');       // General message
// console.error('Error message');    // Errors
// console.warn('Warning message');   // Warnings
// console.info('Info message');      // Same as log
// console.debug('Debug message');    // Debug-level logs (may be hidden based on env)

const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.colorize(), // ✨ Adds color
    winston.format.simple()    // Simple string format
  ),
  transports: [new winston.transports.Console()]
});

logger.info('App started');
logger.warn('Be careful!');
logger.error('Something went wrong');
logger.debug('Debugging details...');

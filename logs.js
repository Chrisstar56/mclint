var winston = require("winston");
var {combine, timestamp, label, printf} = winston.format;

const myFormat = printf(({ level, message}) => {
  return `[${level}]: ${message}`;
});

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'warn',
      format: combine(
        myFormat,
        winston.format.colorize({ all: true, colors: {warn: 'red'}})
      ),
    })
  ],
  
});
logger.info("Logger attached");

module.exports = logger;
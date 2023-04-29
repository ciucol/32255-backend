const winston = require('winston')
const customWinstonLevelOptions = require('../config/winston.config')

const logger = winston.createLogger({
  levels: customWinstonLevelOptions.levels,
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize({ colors: customWinstonLevelOptions.colors }),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: './logs/errors.log',
      level: 'warning',
      format: winston.format.simple(),
    }),
  ],
})

module.exports = logger

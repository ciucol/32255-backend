const logger = require('../loggers/factory')

const loggerMiddleware = (req, res, next) => {
  req.logger = logger
  req.logger.info(
    `${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`
  )
  next()
}

module.exports = loggerMiddleware

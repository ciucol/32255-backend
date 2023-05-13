require('dotenv').config()

module.exports = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.port || 3001,
}

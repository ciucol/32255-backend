const dotenv = require('dotenv')

dotenv.config({
  path: `./.env.${process.env.NODE_ENV}`,
})

module.exports = {
  port: process.env.PORT || 8080,
  persistence: process.env.PERSISTENCE || 'memory',
}

const dotenv = require('dotenv')

dotenv.config({
  path: `./.env.${process.env.NODE_ENV}`,
})

module.exports = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.HOST,
  dbName: process.env.DB_NAME,
}

const mongoConnect = require('../../db')
const { persistence } = require('../config/app.config')

switch (persistence) {
  case 'memory':
    module.exports = require('./memory/Users.memory')
    break

  case 'mongo':
    module.exports = require('./mongo/Users.mongo')
    mongoConnect()
    break
}

const NotifierRepository = require('./Notifier.respository')
const notifierAdapter = require('../Adapters/factory')

const notifySender = new NotifierRepository(new notifierAdapter())

module.exports = notifySender

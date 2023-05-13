const { environment } = require('../config/app.config')

switch (environment) {
  case 'development':
    module.exports = require('../Adapters/nodemailer.adapter')
    break

  case 'production':
    module.exports = require('../Adapters/twilioSms.adapter')
    break
}

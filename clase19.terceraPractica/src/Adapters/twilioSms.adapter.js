const twilio = require('twilio')
const {
  smsPhoneNumber,
  smsAccountSID,
  smsAuthToken,
} = require('../config/sms.config')

const client = twilio(smsAccountSID, smsAuthToken)

class TwilioSmsAdapter {
  constructor() {}

  async sendNotification(newUserInfo, notifyForNewUser) {
    try {
      const smsOptions = {
        from: smsPhoneNumber,
        to: newUserInfo.number,
        body: `${notifyForNewUser.subject}: ${notifyForNewUser.message}`,
      }

      await client.messages.create(smsOptions)

      return 'sms enviado'
    } catch (error) {
      throw error
    }
  }
}

module.exports = TwilioSmsAdapter

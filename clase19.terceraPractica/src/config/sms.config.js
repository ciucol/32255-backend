require('dotenv').config()

module.exports = {
  smsAccountSID: process.env.SMS_ACCOUNT_SID,
  smsAuthToken: process.env.AUTH_TOKEN,
  smsPhoneNumber: process.env.SMS_PHONE_NUMBER,
}

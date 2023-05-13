const { emailUser } = require('../config/email.config')
const transport = require('../utils/nodemailer.util')

class NodemailerAdapter {
  async sendNotification(newUserInfo, notifyForNewUser) {
    try {
      const mailOptions = {
        from: emailUser,
        to: newUserInfo.email,
        subject: notifyForNewUser.subject,
        html: notifyForNewUser.message,
      }

      await transport.sendMail(mailOptions)
      return 'Email enviado'
    } catch (error) {
      throw error
    }
  }
}

module.exports = NodemailerAdapter

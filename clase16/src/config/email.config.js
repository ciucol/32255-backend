require('dotenv').config()

module.exports = {
  emailService: process.env.EMAIL_SERVICE,
  emailPort: process.env.EMAIL_PORT,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
}

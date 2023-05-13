const nodemailer = require('nodemailer')
const {
  emailService,
  emailPort,
  emailUser,
  emailPass,
} = require('../config/email.config')

const transport = nodemailer.createTransport({
  service: emailService,
  port: emailPort,
  auth: {
    user: emailUser,
    pass: emailPass,
  },
})

module.exports = transport

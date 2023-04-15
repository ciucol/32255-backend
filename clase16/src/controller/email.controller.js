const { Router } = require('express')
const transport = require('../utils/email.util')
const { emailUser } = require('../config/email.config')

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { to, subject, message } = req.body
    const mailOptions = {
      from: emailUser,
      to,
      subject,
      html: `
        <div>
          <h1>  
            ${message}
          </h1>
          <img src="cid:arquitecto"/>
        </div>
      `,
      attachments: [
        {
          filename: 'arquitecto.JPG',
          path: process.cwd() + '/src/images/arquitecto.JPG',
          cid: 'arquitecto',
        },
        {
          filename: 'blanco.pdf',
          path: process.cwd() + '/src/files/blanco.pdf',
        },
      ],
    }

    const result = await transport.sendMail(mailOptions)
    res.json({ message: result })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router

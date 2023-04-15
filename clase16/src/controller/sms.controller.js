const { Router } = require('express')
const twilio = require('twilio')
const {
  smsAccountSID,
  smsAuthToken,
  smsPhoneNumber,
} = require('../config/sms.config')

const router = Router()
const client = twilio(smsAccountSID, smsAuthToken)

router.post('/', async (req, res) => {
  try {
    const { numbers, message } = req.body

    const result = await numbers.map(async (number, idx) => {
      return await client.messages.create({
        from: smsPhoneNumber,
        to: number,
        body: `${message} - ${idx}`,
      })
    })

    res.json({ message: result })
  } catch (error) {
    res.json({ error: error.message })
  }
})

module.exports = router

const { Router } = require('express')
const usersService = require('../services/users.service')

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hi users' })
})

router.post('/', async (req, res) => {
  try {
    const newUser = await usersService.createUser(req.body)

    res.json({ status: 'success', message: newUser })
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message })
  }
})

module.exports = router

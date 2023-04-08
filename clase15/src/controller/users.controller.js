const { Router } = require('express')
const Users = require('../repositories')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await Users.getAll()
    res.json({ status: 'success', message: users })
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const newUserInfo = req.body

    const user = await Users.insert(newUserInfo)

    res.json({ status: 'success', message: user })
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message })
  }
})

module.exports = router

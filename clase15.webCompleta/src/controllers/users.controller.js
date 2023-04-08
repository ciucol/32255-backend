const { Router } = require('express')
const UsersDAO = require('../dao/Users.dao')

const Users = new UsersDAO()
const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await Users.getAll()
    res.json({ status: 'success', message: users })
  } catch (error) {
    res.status(500).json({ status: 'error', error })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await Users.getOne(id)
    res.json({ status: 'success', message: user })
  } catch (error) {
    res.status(500).json({ status: 'error', error })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body
    const newUserInfo = {
      name,
      email,
    }
    const newUser = await Users.create(newUserInfo)
    res.json({ status: 'success', message: newUser })
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message })
  }
})

module.exports = router

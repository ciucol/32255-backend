const { Router } = require('express')
const UsersDAO = require('../DAOs/mongo/Users.dao')
const validateBodyValues = require('../middlewares/validateBodyValues.middleware')
const usersService = require('../services/users.services')

const router = Router()
const Users = new UsersDAO()

router.get('/', async (req, res) => {
  try {
    const users = await Users.getAll()
    res.json({ message: users })
  } catch (error) {
    res.json({ error })
  }
})

router.post(
  '/',
  validateBodyValues('first_name', 'last_name', 'email', 'password'),
  async (req, res) => {
    try {
      const newUser = await usersService.userCreate(req.user)
      res.json({ message: newUser })
    } catch (error) {
      res.json({ error })
    }
  }
)

router.delete('/', async (req, res) => {
  try {
    const users = await Users.deleteAllForAdmins()
    res.json({ message: 'Delete all' })
  } catch (error) {
    res.json({ error })
  }
})

module.exports = router

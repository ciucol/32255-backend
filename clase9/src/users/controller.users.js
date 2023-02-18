const { Router } = require('express')
const UserDao = require('../dao/User.dao')
const FilesDao = require('../dao/Files.dao')
const User = new UserDao()
const UserManager = new FilesDao('Users.json')
const router = Router()


router.get('/', async (req, res) => {
  const users = await User.find()
  res.json({ message: users })
})

router.post('/', async (req, res) => {
  const users = await UserManager.loadItems()
  const response = await User.insertMany(users)
  res.json({ message: response })
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { product } = req.body
    const response = await User.updateOne(id, product)

    res.json({ message: response })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.delete('/', async (req, res) => {
  const response = await User.deleteMany()
  res.json({ message: response })
})

module.exports = router
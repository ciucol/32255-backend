const { Router } = require('express')
const {
  generateUsers,
  generateUsersAndProducts,
} = require('../utils/userMock.utils')

const router = Router()

router.get('/', (req, res) => {
  const { usersNumber = 2 } = req.query
  const users = generateUsersAndProducts(usersNumber)
  res.json({ message: users })
})

module.exports = router

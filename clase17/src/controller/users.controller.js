const { Router } = require('express')
const CustomErrors = require('../utils/errors/Custom.errors')
const generateUserErrorInfo = require('../utils/errors/info.errors')
const EnumErrors = require('../utils/errors/Enum.errors')

const router = Router()
const users = []

router.post('/', (req, res) => {
  const { first_name, last_name, age, email } = req.body

  if (!first_name || !last_name || !email) {
    CustomErrors.createError({
      name: 'User creation error',
      cause: generateUserErrorInfo({ first_name, last_name, email }),
      message: 'Error trying to create user',
      code: EnumErrors.INVALID_TYPES_ERROR,
    })
  }

  const user = {
    first_name,
    last_name,
    age,
    email,
  }

  if (users.length === 0) {
    user.id = 1
  } else {
    user.id = users[users.length - 1].id + 1
  }

  users.push(user)

  res.json({ message: users })
})

module.exports = router

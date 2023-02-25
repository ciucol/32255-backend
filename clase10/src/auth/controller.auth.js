const { Router } = require('express')
const User = require('../models/user.model')

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) return res.status(400).json({ error: 'El usuario y la contraseña no coinciden' })

    if (user.password !== password) return res.status(400).json({ error: 'El usuario y la contraseña no coinciden' })

    req.session.user = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email
    }

    res.status(201).json({ message: 'Sesión iniciada' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy(error => {
    if (error) return res.json({ error })

    res.redirect('/login')
  })
})

module.exports = router
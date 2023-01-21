const { Router } = require('express')

const router = Router()

const pets = []

router.get('/', (req, res) => {
  res.json({ message: pets })
})

router.post('/', (req, res) => {
  const { name, specie } = req.body

  const pet = {
    name,
    specie
  }

  pets.push(pet)

  res.json({ message: 'Mascota generada' })
})

router.post

module.exports = router
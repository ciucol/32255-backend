const { Router } = require('express')

const router = Router()

const foods = [
  {
    name: 'Pizza',
    price: 10000
  },
  {
    name: 'Hamburguesa',
    price: 8000
  },
  {
    name: 'Hot Dog',
    price: 5000
  },
  {
    name: 'Papas fritas',
    price: 3000
  }
]

router.get('/', (req, res) => {
  const user = {
    name: 'Titín',
    country: 'col',
    role: 'admin'
  }

  const random = Math.round(Math.random() * (foods.length - 1))

  const product = foods[random]

  console.log(product)
  res.render('index.handlebars', {
    user,
    foods,
    isAdmin: user.role === 'admin',
    style: 'index.css'
  })
})

module.exports = router
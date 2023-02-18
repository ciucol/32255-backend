const { Router } = require('express')
const Product = require('../dao/models/Product.model')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.json({ message: products })
  } catch (error) {

  }
})

router.post('/', async (req, res) => {
  try {
    const { name, price, description } = req.body

    const productInfo = {
      name,
      price,
      description
    }
    const newProduct = await Product.create(productInfo)

    res.json({ message: newProduct })
  } catch (error) {
    res.status(500).json({ error })
  }
})

module.exports = router
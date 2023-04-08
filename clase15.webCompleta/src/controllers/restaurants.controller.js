const { Router } = require('express')
const RestaurantsDAO = require('../dao/Restaurants.dao')

const Restaurants = new RestaurantsDAO()
const router = Router()

router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurants.getAll()
    res.json({ status: 'success', message: restaurants })
  } catch (error) {
    res.status(500).json({ status: 'error', error })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const restaurant = await Restaurants.getOne(id)

    res.json({ status: 'success', message: restaurant })
  } catch (error) {
    res.status(500).json({ status: 'error', error })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name } = req.body
    const newRestaurantInfo = {
      name,
    }
    const newRestaurant = await Restaurants.create(newRestaurantInfo)

    res.json({ status: 'success', message: newRestaurant })
  } catch (error) {
    res.status(500).json({ status: 'error', error })
  }
})

router.patch('/:id/addProducts', async (req, res) => {
  try {
    const { id } = req.params
    const { name, price } = req.body
    const newProductInfo = {
      name,
      price,
    }

    const restaurant = await Restaurants.getOne(id)
    restaurant.products.push(newProductInfo)

    const restaurantUpdate = await Restaurants.update(id, restaurant)

    res.json({ status: 'success', message: restaurantUpdate })
  } catch (error) {
    res.status(500).json({ status: 'error', error })
  }
})

module.exports = router

const { Router } = require('express')
const FilesDao = require('../dao/Files.dao')
const Order = require('../dao/models/Order.model')
const OrdersFile = new FilesDao('Orders.json')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
    res.json({ message: orders })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/reports', async (req, res) => {
  const { size } = req.body
  try {
    const orders = await Order.aggregate([
      {
        $match: { size }
      },
      {
        $group: { _id: '$name', totalQuantity: { $sum: '$quantity' } }
      },
      {
        $sort: { totalQuantity: -1 }
      },
      {
        $group: { _id: 1, orders: { $push: "$$ROOT" } }
      },
      {
        $project: { "_id": 0, orders: "$orders" }
      },
      {
        $merge: { into: "reports" }
      }
    ])

    res.json({ report: orders })
  } catch (error) {

  }
})

router.post('/', async (req, res) => {
  try {
    const orders = await OrdersFile.loadItems()
    const newOrders = await Order.insertMany(orders)
    res.json({ message: newOrders })

  } catch (error) {
    res.status(500).json({ error })
  }
})

router.delete('/', async (req, res) => {
  await Order.deleteMany()
  res.json({ message: 'Órdenes eliminada' })
})

module.exports = router
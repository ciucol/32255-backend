const { Router } = require('express')
const PaymentService = require('../utils/payment.util')

const router = Router()

const products = [
  { id: 1, name: 'papas', price: 1000 },
  { id: 2, name: 'queso', price: 500 },
  { id: 3, name: 'hamburguesa', price: 1500 },
  { id: 4, name: 'soda', price: 1000 },
  { id: 5, name: 'golosinas', price: 800 },
]

router.post('/payment-intents', async (req, res) => {
  try {
    const { id } = req.query
    const productRequested = products.find(product => product.id === Number(id))
    if (!productRequested)
      return res
        .status(400)
        .json({ status: 'error', error: 'Product not found' })

    const paymentIntentInfo = {
      amount: productRequested.price,
      currency: 'usd',
      metadata: {
        userId: 'asd67shtafi7sj09fd8h',
        orderDetails: productRequested.name,
        address: JSON.stringify({
          street: 'Av siempre viva 123',
          city: 'Sprinfield',
        }),
      },
    }

    const service = new PaymentService()

    const result = await service.createPaymentIntent(paymentIntentInfo)
    console.log(result)

    res.send({ status: 'success', payload: result })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

module.exports = router

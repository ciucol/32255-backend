const Stripe = require('stripe')

class PaymentService {
  constructor() {
    this.stripe = new Stripe(
      'sk_test_51NHWIfLFgSsl1dNSY0NThM57UtHHL9f7lznLGLe1IViYYSxjLHzHS5NegqrkPnU1Oy9NtrYc9RS3viD6vYBzPD9a00JjEwFKq5'
    )
  }

  createPaymentIntent = async data => {
    const paymentIntent = this.stripe.paymentIntents.create(data)
    return paymentIntent
  }
}

module.exports = PaymentService

const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const usersCollection = 'user'

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    index: true
  },
  last_name: String,
  email: String,
  country: String,
  products: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'product'
        }
      }
    ],
    default: []
  }
})

userSchema.pre('find', function () {
  this.populate('products.product')
  this.select(['first_name', 'last_name'])
})

userSchema.plugin(mongoosePaginate)
const User = mongoose.model(usersCollection, userSchema)

module.exports = User


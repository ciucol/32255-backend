const mongoose = require('mongoose');

const userCollection = 'user';

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: false,
  },
  first_name: String,
  last_name: String,
  age: Number,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const User = mongoose.model(userCollection, userSchema);

module.exports = User;

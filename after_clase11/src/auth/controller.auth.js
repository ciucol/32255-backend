const { Router } = require('express');
const { generateToken } = require('../utils/jwt.utils');

const router = Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // todo validación en db

  const token = generateToken(email);

  // res.json({ message: 'Sesión iniciada', token });
  res
    .cookie('authToken', token, { maxAge: 300000, httpOnly: true })
    .json({ message: 'Sesión iniciada' });
});

module.exports = router;

const { Router } = require('express');
const { generateToken } = require('../utils/jwt.utils');

const router = Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  //todo validación en db para verificar autenticación  const user = User.findOne({email})

  const userInfo = {
    email,
    role: 'user',
  };
  const token = generateToken(userInfo);

  // res.json({ message: 'Sesión iniciada', token });
  res
    .cookie('authToken', token, { maxAge: 60000, httpOnly: true })
    .json({ message: 'Sesion iniciada' });
});

module.exports = router;

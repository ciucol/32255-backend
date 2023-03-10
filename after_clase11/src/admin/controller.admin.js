const { Router } = require('express');
const { authToken, authTokenCookies } = require('../utils/jwt.utils');

const router = Router();

router.get('/private', authTokenCookies, (req, res) => {
  res.json({ message: 'Esta es una información privada!!!!!!!!!!' });
});

module.exports = router;

const { Router } = require('express');
const passport = require('passport');
const authorization = require('../middlewares/authorization.middlewares');
const { authToken, authTokenCookies } = require('../utils/jwt.utils');
const passportCall = require('../utils/passportCall.utils');

const router = Router();

router.get(
  '/private',
  passportCall('jwt'),
  authorization('admin'),
  (req, res) => {
    res.json({ message: 'Si ves esto es porque eres admin!!!!!!' });
  }
);

module.exports = router;

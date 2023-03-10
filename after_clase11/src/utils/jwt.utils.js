const jwt = require('jsonwebtoken');

const SECRET_KEY = 'coderSecret';

exports.generateToken = user => {
  const token = jwt.sign({ user }, SECRET_KEY, { expiresIn: '300s' });

  return token;
};

exports.authToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Not authenticated' });

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET_KEY, (error, credentials) => {
    if (error) return res.status(403).json({ error: 'Not authorized' });

    req.user = credentials.user;
    next();
  });
};

exports.authTokenCookies = (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) return res.status(401).json({ error: 'Not authenticated' });

  jwt.verify(token, SECRET_KEY, (error, credentials) => {
    if (error) return res.status(403).json({ error: 'Not authorized' });

    req.user = credentials.user;
    next();
  });
};

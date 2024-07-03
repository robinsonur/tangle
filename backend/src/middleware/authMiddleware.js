const { verify } = require('jsonwebtoken');
const { secret } = require('../config');

function authToken(req, res, next) {

  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token)
    return res.status(401).send({ message: 'Access Denied!' })
  ;

  try {

    const verified = verify(token, secret);

    req.user = verified;

    next();

  } catch (error) {

    res.status(400).send({ message: 'Invalid Token!' });

  }

}

module.exports = authToken
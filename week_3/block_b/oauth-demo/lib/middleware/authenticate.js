const { verify } = require('../utils/jwt');

module.exports = (req, res, next) => {
  try {
    // take session cookie off of request
    const cookie = req.cookies[process.env.COOKIE_NAME];
    // check session cookie is signed by use
    const user = verify(cookie);
    // attach user to request
    req.user = user;

    next();
  } catch (err) {
    // if not signed by us: ERROR
    next(err);
  }
};

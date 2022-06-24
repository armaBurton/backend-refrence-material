const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // get the value from the cookie (jwt)
    const cookie = req.cookies[process.env.COOKIE_NAME]; // req.cookies.session
    // verify the jwt
    const payload = jwt.verify(cookie, process.env.JWT_SECRET);
    // payload: { id: '1', username: 'ruby' }
    req.user = payload;

    next();
  } catch (error) {
    error.message = 'You must be signed in to continue.';
    error.status = 401;
    next(error);
  }
};

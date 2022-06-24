const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Tweet = require('../models/Tweet');

module.exports = Router()
  // POST /api/v1/tweets
  .post('/', authenticate, (req, res, next) => {
    Tweet.insert({
      ...req.body,
      username: req.user.username,
    })
      .then((tweet) => res.send(tweet))
      .catch((error) => next(error));
    // or .catch(next);
  });

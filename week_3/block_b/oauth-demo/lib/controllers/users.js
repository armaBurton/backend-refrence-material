const { Router } = require('express');
const User = require('../models/User');

module.exports = Router()
  // GET /api/v1/users/1/tweets
  .get('/:id/tweets', async (req, res, next) => {
    try {
      const user = await User.findByUsernameWithTweets(req.params.id);
      res.send(user);
    } catch (error) {
      next(error);
    }
  });

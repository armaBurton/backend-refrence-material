const { Router } = require('express');
const { sign } = require('../utils/jwt');
const authenticate = require('../middleware/authenticate');
const UserService = require('../services/UserService');

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

module.exports = Router()
  // GET /api/v1/auth/login
  .get('/login', (req, res) => {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=user&redirect_uri=http://localhost:7890/api/v1/auth/login/callback`
    );
  })

  // GET /api/v1/auth/login/callback
  .get('/login/callback', async (req, res, next) => {
    try {
      // req.query is similar to something like req.params
      // where the query params are stored as keys
      // on the req.query object
      // 1. get code from query param and pass it to
      //    our service to find/create a user
      const user = await UserService.create(req.query.code);
      // { id: '1', username: 'test_user', photoUrl: 'https://example.com/photo.png' }

      res
        .cookie(process.env.COOKIE_NAME, sign(user), {
          httpOnly: true,
          maxAge: ONE_DAY_IN_MS,
        })
        .redirect('/');
    } catch (error) {
      next(error);
    }
  })

  // GET /api/v1/auth/verify
  .get('/verify', authenticate, (req, res, next) => {
    res.send(req.user);
  });

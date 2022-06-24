const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');

module.exports = Router()
  .get('/', authenticate, authorize, async (req, res, next) => {
    try {
      const posts = [
        {
          id: '1',
          title: 'Hello, world!',
          content: 'My first post!',
          user_id: '1',
        },
      ];

      res.send(posts);
    } catch (error) {
      next(error);
    }
  })

  // POST /api/v1/posts/userId
  .post('/', async (req, res, next) => {
    try {
      // const { userId } = req.params; // DON'T DO THIS!
      // but instead, use the user that is being set in the auth middleware:
      const { userId } = req.user; // Do this instead, ie. use the user data that WE set, not the one coming from the user (don't trust 'em!)
      const { title, content } = req.body;
      const post = await Post.create({ userId, title, content });
      res.send(post);
    } catch (error) {
      next(error);
    }
  });

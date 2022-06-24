const express = require('express');

const app = express();

// This and `addPotatoEyes` would normally be in their
// own files in `/lib/middleware`
const potatoify = (req, res, next) => {
  console.log('Hit potatoify!');
  req.potatoHead = { name: 'Potato' };
  // middleware has to either:
  // * send a response (`res.send`/`res.json`)
  // * call `next` */
  next();
};

const addPotatoEyes = (req, res, next) => {
  console.log('Hit addPotatoEyes!!');
  req.potatoHead.eyes = 'blue';
  req.hasPotatoEyes = true;
  // middleware has to either:
  // * send a response (`res.send`/`res.json`)
  // * call `next` */
  next();
};

// You can define a route handler similarly:
const getPotato = async (req, res, next) => {
  try {
    res.send(req.potatoHead);
  } catch (error) {
    error.message = 'An unexpected error occurred. Whoops!';
    next(error);
  }
};

// Built in middleware
app.use(express.json()); // req.body

// App routes
app.get('/potato', potatoify, getPotato);

app.get('/potato/:id', potatoify, addPotatoEyes, (req, res, next) => {
  try {
    res.send({ id: req.params.id, name: 'Potato' });
  } catch (error) {
    next(error);
  }
});

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

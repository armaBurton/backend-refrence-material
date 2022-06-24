const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Built in middleware
app.use(express.json()); // req.body
app.use(cookieParser()); // req.cookies/res.cookie

// app.use((req, res, next) => {
//   console.log('my custom middleware');
//   next(); // or res.send, but not both
// });

// App routes
app.use('/api/v1/auth', require('./controllers/auth'));
app.use('/api/v1/posts', require('./controllers/posts'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

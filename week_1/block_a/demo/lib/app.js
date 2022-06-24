const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// The above line takes the JSON body of the request
// and assigns it's value to req.body.
// Effectively, it's like doing this:
// req.body = JSON.parse('{
//   "name": "Rusty",
//   "age": 11,
//   "favoriteTreat": "Chicken"
// }')

// App routes
/* These are kind of like doing this with react router:

  <Route path="/">
    Hit root route
  </Route>
*/
app.get('/', (req, res) => {
  res.send('Hit root route');
});

app.use('/api/v1/dogs', require('./controllers/dogs'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

// export default app
module.exports = app;

// module.exports = { myApp: app }
// const { myApp } = require("./lib/app")

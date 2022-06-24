const net = require('net');

const app = net.createServer((connectedClient) => {
  console.log('Client connected!');

  connectedClient.on('data', (data) => {
    const rawRequest = data.toString();
    const parsedRequest = rawRequest.split('\r\n');
    const [method, path] = parsedRequest[0].split(' ');
    console.log(parsedRequest);

    // app.get('/hello', (req, res) => { res.send('Hi!') })
    if (method === 'GET' && path === '/hello') {
      connectedClient.write(`HTTP/1.1 200 OK\r
Content-Type: text/plain\r
\r
Hi!`);
    } else if (method === 'GET' && path === '/dog') {
      connectedClient.write(`HTTP/1.1 200 OK\r
Content-Type: text/html\r
\r
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Dog!</title>
</head>
<body>
  <img src="https://danminkevitch.com/ruby.jpg" alt="Ruby!" />
</body>
</html>`);
    } else if (method === 'GET' && path === '/dog.json') {
      connectedClient.write(`HTTP/1.1 200 OK\r
Content-Type: application/json\r
\r
{ "name": "Ruby", "favoriteTreat": "Chicken" }
`);
    } else if (method === 'POST' && path === '/echo') {
      connectedClient.write(`HTTP/1.1 200 OK\r
Content-Type: application/json\r
\r
${parsedRequest[parsedRequest.length - 1]}
      `);
    } else {
      connectedClient.write(`HTTP/1.1 200 OK\r
Content-Length: 269\r
Content-Type: text/html\r
\r
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Example</h1>
</body>
</html>`);
    }
    connectedClient.end();
  });
});

module.exports = app;

const net = require('net');

const client = net.connect(5050, 'localhost', () => {
  client.write('Hello');
});

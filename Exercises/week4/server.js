const http = require('http');

const settings = {
  port: 8888,
  text: 'Dit is een standaard text!'
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${settings.text}`);
});

server.listen(settings.port, 'localhost', () => {
  console.log('Server is running!');
});
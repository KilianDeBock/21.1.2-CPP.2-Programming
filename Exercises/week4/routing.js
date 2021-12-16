const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/about') {
    res.end('Wij zijn PGM-studenten');
  } else if (req.url === '/contact') {
    res.end('Contacteer ons');
  } else if (req.url === '/') {
    res.end('PGM Gent');
  } else {
    res.end('Oh god, what did u do?! 404');
  }
});

server.listen(3000, 'localhost', () => {
  console.log('Server is running!');
});
const http = require('http');

// Create a server instance
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('test!');
});

// Listen on a specific port
const port = 4000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
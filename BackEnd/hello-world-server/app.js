const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => { 
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    }
  else if (req.url === '/canvas.js') {
        fs.readFile('canvas.js', (err, data) => {
          res.writeHead(200, { 'Content-Type': 'application/javascript' });
          res.end(data);
        });
      } 
  else 
      {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.statusCode = 404;
        res.end('404 Not Found');     
      }
});

const PORT = 5050;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
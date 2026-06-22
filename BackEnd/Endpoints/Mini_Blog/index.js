const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {

   if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } 
   else if (req.url === '/post1') {     
   fs.readFile('post1.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
   else if (req.url === '/post2') {     
   fs.readFile('post2.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
    else {
        fs.readFile('not-found.html', (err, data) => {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

});

const PORT = 3000;
servidor.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
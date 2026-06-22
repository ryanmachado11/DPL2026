const http = require('http');
const fs = require('fs');
const port = 8080;

const servidor = http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://localhost:${port}`);
    const path = urlParams.pathname;
    if (path === '/') {
        const color = urlParams.searchParams.get('color');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        if (color === 'blue'){
             fs.readFile('blue.html', (err, data) => {
                res.end(data);
            });
        } else if (color === 'green') {
             fs.readFile('green.html', (err, data) => {
                res.end(data);
            });
        } else if (color === 'red') {
            fs.readFile('red.html', (err, data) => {
                res.end(data);
            });
        } else {
            res.end(`Cor inválida.`);
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Página não encontrada');
    }

});

servidor.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
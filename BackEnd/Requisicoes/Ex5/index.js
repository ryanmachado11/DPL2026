const http = require('http');
const fs = require('fs');
const port = 8080;

const servidor = http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://localhost:${port}`);
    const path = urlParams.pathname;
    
    if (path === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        });
    } else if (path === '/guess') {
        const numero = urlParams.searchParams.get('Enviar');
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`Você enviou: ${numero}`);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Página não encontrada');
    }
});

servidor.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {

    if (req.url === '/info') {
        res.writeHead(100, {'Content-Type': 'text/plain'});
        res.end('Codigo 100 - Continue');
    }

    else if (req.url === '/sucess') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Codigo 200 - OK');
    }

    else if (req.url === '/redirect') {
        res.writeHead(301, {'Content-Type': 'text/plain'});
        res.end('Codigo 301 - Rediect');
    }

    else if (req.url === '/client-error') {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end('Codigo 400 - Bad Request');
    }

    else if (req.url === '/server-error') {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Codigo 500 - Internal Server Error');
    }

    else {
        fs.readFile('index.html', (err, dados) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Erro ao carregar a pagina');
                return;
            }

            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(dados);
        });
    }
}); 

const porta = 5050;

servidor.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
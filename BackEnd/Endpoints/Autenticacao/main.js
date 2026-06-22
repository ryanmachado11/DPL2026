const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {
    if (req.url === '/login'){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Login realizado com sucesso!');
    }
    else if (req.url === '/dashboard'){
        res.writeHead(401, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Acesso negado. Faça login primeiro');
    }
    else if (req.url === '/admin'){
        res.writeHead(403, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Você não tem permissão para acessar esta área.');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Página não encontrada');
    }
});

const port = 8080;

servidor.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
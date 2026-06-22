const http = require('http');
const port = 8080;

const servidor = http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://localhost:${port}`);
    const path = urlParams.pathname;
    if (path === '/login') {
        const email = urlParams.searchParams.get('email');
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        if (email === 'admin@etefmc.com.br'){
            res.end(`Sucesso! Bem-vindo, ${email}`); 
        } else {
            res.end(`Email inválido. Acesso negado para ${email}`);
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Página não encontrada');
    }

});

servidor.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
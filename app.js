const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Verifica se a solicitação é para o arquivo HTML
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Erro ao carregar o arquivo HTML');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // Responde com um erro 404 se a URL não corresponder ao arquivo HTML
        res.writeHead(404);
        res.end('Página não encontrada');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT}`);
});

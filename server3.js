// Criando um sistema de rotas e status code
const http = require('http');
const fs = require('fs');
let porta = 3000;
let host = 'localhost';

const server = http.createServer((req, res) => {
    //header
    res.setHeader('Content-type', 'text/html');

    //rotas
    let html_pag = '';

    switch (req.url) {
        case '/':
            html_pag = 'home.html';
            res.statusCode = 200;
            break;
        case '/home':
            html_pag = 'home.html';
            break;
        case '/servicos':
            html_pag = 'servicos.html';
            res.statusCode = 200;
            break;
        case '/contato':
            html_pag = 'contato.html';
            break;
        default:
            html_pag = '404.html';
            res.statusCode = 404;
    }
    // 1 ° qual a pasta - 2° nome do arquivo
    fs.readFile('./html/' + html_pag, (erro, data) => {
        if (erro) {
            console.log(erro);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
})


server.listen(porta, host, () => {
    console.log('Servidor iniciado.');
})
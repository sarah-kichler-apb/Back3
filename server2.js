// Criando um servidor com resposta de uma página html

const http = require('http');
const fs = require('fs');   
let porta = 3000;
let host = 'localhost';

const server = http.createServer((req, res) =>{
    //header
    res.setHeader('Content-type', 'text/html');
    fs.readFile('pag1.html', (erro, data)=>{
        if (erro) {
            console.log("Erro!!");
            res.write('Deu ruim!');
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
})

server.listen(porta, host, ()=>{
    console.log('Servidor iniciado.');
})
// Criando um servidor com resposta de uma página html

const http = require('http');
const fs = require('fs');   
let porta = 3000;
let host = 'localhost';

const server = http.createServer((req, res) =>{
    //header
    res.setHeader('Content-type', 'text/html');
    fs.readFile()
    res.end();
})

server.listen(porta, host, ()=>{
    console.log('Servidor iniciado.');
})
// Criando um servidor web usando node
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('Pedido efetuado.');
    res.setHeader('Content-type', 'text/html')
    res.write('Pedido aceito. \n');
    res.write('<h3>Pedido aceito dnv.</h3>');
    res.end();
});

server.listen(3000, 'localhost', ()=>{
    console.log('Servidor iniciado.');
});
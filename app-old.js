const http = require('http');


http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let persona = {
        nombre: 'Néstor Estrada',
        edad: 26,
        url: req.url
    };


    res.write(JSON.stringify(persona));

    res.end();

}).listen(3000);

console.log('Escuchando en el puerto 3000');
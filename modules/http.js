const http = require('http');

// http://localhost:8080
const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end('<h1>Home Page</h1>')
    }

    if (req.url === '/users') {
        const users = [
            {
                name: 'Geralt de Rivia',
                email: 'geraltrivia@gmail.com'
            },
            {
                name: 'Yennefer de Vengerberg',
                email: 'yennefervenger@gmail.com'
            }
        ];

        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(users));
    }
})

server.listen(port, () => console.log(`Rodando na porta ${port}`));

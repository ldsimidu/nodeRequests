const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.contentType("application/html");
    res.status(200).send('<h1>OPAAAAA</h1>');
})

app.get('/users', (req, res) => {
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
    
    res.status(200).send(JSON.stringify(users))
})

const port = 8080;

app.listen(port, () => console.log(`Rodando na porta ${port}`))
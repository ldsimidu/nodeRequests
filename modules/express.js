const express = require('express');
const UserModel = require('../src/models/user.model')

const app = express();
app.use(express.json())

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

app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).send(error.message);
    }
})

const port = 8080;

app.listen(port, () => console.log(`Rodando na porta ${port}`))
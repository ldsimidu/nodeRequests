const express = require('express');
const UserModel = require('../src/models/user.model')

const app = express();
app.use(express.json()) // declarando que o express irá receber dados em json

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({}); //pega todos os users

        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.get('/users/:id', async (req, res) => { //:id entra como parametro da requisição, ex: http://localhost:8080/users/68aabe
    try {
        const id = req.params.id;

        const user = await UserModel.findById(id);

        return res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.post('/users', async (req, res) => {
    // post no postman, url: http://localhost:8080/users
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).send(error.message);
    }
})

const port = 8080;

app.listen(port, () => console.log(`Rodando na porta ${port}`))
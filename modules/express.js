const express = require('express');
const UserModel = require('../src/models/user.model')

const app = express();
app.use(express.json()) // declarando que o express irá receber dados em json

// função executada antes de qualquer requisição, middleware
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

// Pega todos os users
app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({}); //pega todos os users

        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// Pega user por id
app.get('/users/:id', async (req, res) => { //:id entra como parametro da requisição, ex: http://localhost:8080/users/68aabe
    try {
        const id = req.params.id;

        const user = await UserModel.findById(id);

        return res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// Cria usuário
app.post('/users', async (req, res) => {
    // post no postman, url: http://localhost:8080/users
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// Atualizar parcialmente um user
app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const users = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        // primeiro param.; segundo param (dados que serão atualizados ; retorna o user com dados atualizados

        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Deleta user
app.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const users = await UserModel.findByIdAndDelete(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

const port = 8080;

app.listen(port, () => console.log(`Rodando na porta ${port}`))
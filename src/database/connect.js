const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.42tgt1t.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJS`
        await mongoose.connect(uri)
        return console.log("Conexão ao banco de dados realizada com sucesso");
    } catch(error) {
        console.log('Ocorreu um erro ao se conectar com o banco de dados :', error);
    }
}

module.exports = connectToDatabase;
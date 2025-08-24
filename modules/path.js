const path = require('path');

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto das infos do arquivo
console.log(path.parse(__filename));

// dirname - caminho do arquivo
console.log(__dirname);

// juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"));


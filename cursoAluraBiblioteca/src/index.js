const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

console.log('O caminho do arquivo é:', link); // Adicione esta linha

fs.readFile (link, 'utf-8', (erro, texto) => {
    console.log(texto);
});
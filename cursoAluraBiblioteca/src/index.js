const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile (link, 'utf-8', (erro, texto) => {
    if (erro) {
        console.log('qual é o erro?', erro);
        return //deixa de executar aqui e vai para outro codigo
    }
    contaPalavras(texto);
});

function contaPalavras(texto) {
    const paragrafos = extrairParagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo)
    });
    console.log(contagem)
}

function extrairParagrafos(texto) {
    return paragrafos = texto.toLowerCase().split('/n');
}

function limpaPalavras(palavra) {
    return palavra.replace(/[,.\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' '); 
    const resultado = {};

    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) +1
        }
    });
    return resultado;
}
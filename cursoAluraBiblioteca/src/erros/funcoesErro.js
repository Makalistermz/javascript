export default function trataErros(erro) {
    if (erro.code == 'ENOENT') {  //code mostra a sigla do erro
        throw new Error('Arquivo não encontrado');
    } else {
        console.log(erro);
    }
}
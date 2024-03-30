// Criar uma funqäo que receba uma string como parametro e conte quantas palavras tern nela.
// Considere que todas as palavras sé säo separadas por um espago.

function ContaPalavras(string){
    //Separa as palavras pelo espaço
    let palavras = string.split(' ');
    //recebe a quantidade total de palavras separadas por espaço
    let nPalavras = palavras.length;
    return nPalavras;
}

frase = "beu beu beu beubeubeu"
console.log(ContaPalavras(frase))
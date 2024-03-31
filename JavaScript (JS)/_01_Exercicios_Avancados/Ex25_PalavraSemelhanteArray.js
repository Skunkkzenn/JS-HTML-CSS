// A fim de criar um mecanismo de busca para sua aplicação, voce precisa iniciar criando uma função para
// identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parametro uma palavra e, como segundo parametro, um array
// de strings. A função deverá filtrar as palavras do array que contem nelas a string do primeiro parametro.

//Ter atenção.
function IdentificarPalavra(entrada, arrayString){
    const resultado = [];

    for (let palavra of arrayString) {
        // Verifica se a palavra contém a entrada
        if(palavra.includes(entrada))
        // Adiciona a palavra ao resultado
        resultado.push(palavra)
    }
    return resultado;
}

//Mais rápido...
function BuscarPalavraSemelhante(entrada, arrayString){
    return arrayString.filter(palavra => palavra.includes(entrada))
}

console.log(IdentificarPalavra("pro", ["programação", "javascript", "mobile", "profissional"])); // retornará ["programação", "profissional"]
console.log(BuscarPalavraSemelhante("python", ["java", "javascript", "c++", "pythonista"])); // retornará ["pythonista"]
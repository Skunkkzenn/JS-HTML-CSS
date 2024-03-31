// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
// consoantes, ou seja, sem as vogais.

function removerVogais(palavra){
    const vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    
    vogais.forEach(vogal => palavra = palavra.replace(vogal, ''))
    return palavra;
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos")) 
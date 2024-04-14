// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
// que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
// têm a quantidade de dígitos indicada pelo segundo parâmetro.

function filtrarPorQuantidadeDeDigitos(numArray, quantidade) {
    const resultado = [];

    for (const numero of numArray) {
        // Converte o número para uma string para contar os dígitos
        const numString = numero.toString();
        
        // Verifica se o número de dígitos é igual à quantidade especificada
        if (numString.length === quantidade) {
            resultado.push(numero);
        }
    }
    return resultado;
}

numeros = [10, 111, 15, 16, 17]

console.log(filtrarPorQuantidadeDeDigitos(numeros, 3))
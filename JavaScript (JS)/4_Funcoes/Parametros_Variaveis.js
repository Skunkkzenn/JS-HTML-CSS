function soma() {
    let soma = 0
    for (i in arguments) { //arguments é um array, de tal forma, podemos aceder cada um dos elemetos passado na função
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2, 3))
console.log(soma(1, 2, 3, "Teste")) // Vai concatenar a frase juntamente do resultado da soma
console.log(soma('a', 'b', 'c')) // Íra concatenar todas as strings, mas como já iniciou a variavel soma como 0, também estará no resultado final

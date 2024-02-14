/* 33) ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. 
    Cada um destes vetores deverá conter quatro valores, 
    sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 
    Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e 
    mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['i', 'j', 'k', 'd']
let vetorDouble = [10.53, 8.95, 4.77, 6.63]

let newArray = vetorInteiro.concat(vetorString, vetorDouble)
console.log(newArray)


//OU

function concat(...arguments){
    let resultado = []
    for(let i =0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concat(vetorInteiro, vetorDouble))
console.log(concat(vetorInteiro, vetorString))
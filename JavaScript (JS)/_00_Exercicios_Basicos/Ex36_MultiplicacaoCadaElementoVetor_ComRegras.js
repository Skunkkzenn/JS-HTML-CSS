/* 36) ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. 
       Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada 
       elemento pelo número passado como parâmetro. 
       A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.  */

let vetor = [5, 4, 5, 6, 3, 5, 8, 9]

function MultiplicacaoVetor(vetor, multiplicador){
    let newVetor = [];
    vetor.forEach(elemento => {
        newVetor.push(elemento * multiplicador)
    })
    return newVetor
}

function MultiplicaVetorMaiorQue5(vetor, multiplicador){
    let newVetor = [];
    if(multiplicador < 5){
        vetor.forEach(elemento => {
            newVetor.push(elemento * multiplicador)
        });
    }
    else {
        return false;
    }
    return newVetor;
}

function MultiplicaSeElementoForMaiorQue5(vetor, multiplicador){
    let newVetor = [];
    if(vetor.length )
    vetor.forEach(elemento => {
        if(elemento > 5) {
            newVetor.push(elemento * multiplicador)
        }else{
            return false;
        }
    });
    return newVetor;
}

//OU 

function MultiplicaSeElementoForMaiorQue5_2(vetor, multiplicador){
    let newVetor = vetor.filter(elemento => elemento > 5);
    let resultado = newVetor.map(elemento => elemento * multiplicador)
    return resultado;    
}

console.log(MultiplicacaoVetor(vetor, 2))
console.log(MultiplicaVetorMaiorQue5(vetor, 10))
console.log(MultiplicaVetorMaiorQue5(vetor, 4))
console.log(MultiplicaSeElementoForMaiorQue5(vetor, 10))
console.log(MultiplicaSeElementoForMaiorQue5_2([1, 5, 8, 9, 10], 10))
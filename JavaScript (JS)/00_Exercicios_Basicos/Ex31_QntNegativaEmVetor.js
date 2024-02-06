/* 31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
e imprime a quantidade no console. */

let vetor = [-2, -3, -4, 1]

function NegativosVetor(vetor){
    let qntNegativa = 0;
    let qntPositiva = 0;

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0) {
             qntNegativa++;
        }
        if(vetor[i] > 0){
            qntPositiva++;
        }
    }
    console.log(`Quantidade negativa: ${qntNegativa}`)
    console.log(`Quantidade positiva: ${qntPositiva}`)
}

NegativosVetor(vetor);
/*
29) 
​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
deles estão fora do intervalo, escrevendo estas informações. */

let vetor = [10, 20, 18, 17, 15, 17, 9, 5, 4, 3]

function NumeroDentroIntervalo(vetor){
    let contadorDentro = 0;
    let contadorFora = 0;

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            contadorDentro++
        }
        else{
            contadorFora++
        }
    }

    console.log(`Dentro do intervalo: ${contadorDentro}`)
    console.log(`Fora do intervalo: ${contadorFora}`)
}

NumeroDentroIntervalo(vetor)
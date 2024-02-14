// 28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function ImparOuPar(vetor){
    let contadorPar = 0;
    let contadorImpar = 0;

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 === 0){
            console.log(`${vetor[i]} é par`)
            contadorPar++;
        }
        else{
            console.log(`${vetor[i]} é impar`)
            contadorImpar++;
        }
    }

    console.log(`Total de números PAR: ${contadorPar}`)
    console.log(`Total de números ÍMPAR: ${contadorImpar}`)
}

ImparOuPar(vetor)
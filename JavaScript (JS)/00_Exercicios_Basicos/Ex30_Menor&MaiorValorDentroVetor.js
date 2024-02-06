// 30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. 

let vetor = [10, 20, 18, 17, 15, 17, 9, 5, 4, 3]

function MaiorEMenor(vetor){
    //Criar variáveis gerais p/ armazenar posicão do vetor
    let maior;
    let menor;
    for(let i = 0; i < vetor.length; i++){
        //Como maior & menor nao foram definidos, serão de inicio undefined, entao
        //Verifica-se primeiro se são, se forem passa a posição atual do vetor
        if(maior === undefined && menor === undefined){
            maior = vetor[i];
            menor = vetor[i];
        } else {
            if(vetor[i] > maior){
                maior = vetor[i];
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }       
    }
    return [maior, menor]
}

console.log(MaiorEMenor(vetor));
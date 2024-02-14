let vetor = [1, 2, 3, 4]
let vetor2 = [3, 3, 3, 3]

function MediaAritmetica(vetor){
    let soma = 0;
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    let tamanhoVetor = vetor.length;
    let media = soma / tamanhoVetor
    console.log(media)
}

MediaAritmetica(vetor)
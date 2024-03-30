// Criar uma funqäo que receba um array de nümeros e retorne o menor nümero desse array.

function MenorNumero(array){
    let valorAtual = array[0];
    
    array.forEach(element => {
        if(element < valorAtual){
            valorAtual = element;
        }
    });
    return valorAtual;
}

teste = [1, 2, 3, 4, 0]
teste1 = [12, -222, 13, 4, 10]

console.log(MenorNumero(teste1))
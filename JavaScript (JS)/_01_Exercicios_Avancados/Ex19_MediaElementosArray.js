// Numa aplicaqäo Web de investimento financeiro da qual voce faz parte da equipe de desenvolvimento,
// pretende-se adicionar a funcionalidade de calcular a média de um conjunto de nümeros informados pelo
// usuåno.
// Com o intuito de realizar esse cålculo, crie uma fungäo que receba um array com uma quantidade
// indeterminada de nümeros e retorne a média simples desses nümeros.

function MediaNumArray(array){
    let total = 0;
    let media = array.length;
    array.forEach(element => {
        total += element; 
    });
    return total / media;
}

array = [0, 10]
array2 = [1, 2, 3, 4, 5]

console.log(MediaNumArray(array2));
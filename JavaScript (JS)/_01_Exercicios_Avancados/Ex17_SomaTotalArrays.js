// Escreva uma fungäo que receba um array de nümeros e retornarå a soma de todos os nümeros desse array.

function SomaArray(array){
    let total = 0;

    array.forEach(element => {
        total += element;
    });
    return total;
}

const numbers = [10, 10, 10]
const numbers2 = [15, 15, 15, 15]

console.log(SomaArray(numbers))
console.log(SomaArray(numbers2))
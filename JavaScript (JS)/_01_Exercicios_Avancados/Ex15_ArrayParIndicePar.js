//Elabore uma funqäo que receba um array de nümeros e retorne um array que tenha todos os nümeros que säo pares e que também tenham indices pares.
function objetoParaArray(object) {
    const newArray = [];

    for(let i = 0; i < object.length; i+=2){
        if(i % 2 === 0 && object[i] % 2 === 0)
        newArray.push(object[i]);
    }

    return newArray;
}

arrayNumber = [1, 2, 3, 4];
arrayNumber1 = [10, 70, 22, 43];

console.log(objetoParaArray(arrayNumber))
console.log(objetoParaArray(arrayNumber1))
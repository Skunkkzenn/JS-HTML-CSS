function ExibePrimeiroEUltimo(array){
    if(array.length > 0){
        console.log([array[0], array[array.length -1]]);
    }
    else{
        console.log('this empty array')
    }
}

let meuArray = [7, 14, "olá"]
let meuArray2 = [7, 14, "olá", -100, "aplicativo"]
ExibePrimeiroEUltimo(meuArray)
ExibePrimeiroEUltimo(meuArray2)
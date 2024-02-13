//Mapear o array, para um outro array do mesmo tamanho, mas com o dados transformados
//Pega em um array e transforma em outro, com os dados alterados/transformados, do mesmo tamanho.

const nums = [1, 2, 3, 4, 5]

//Map é um 'for com propósito'
let resultado = nums.map(function(e){ // e = elementos do array
    //return e * 2
})
console.log(resultado, nums)

const soma10 = e => e + 10; // somará o elemento + 10
const triplo = e => e * 3 // multiplia o elemento por 3

//converte para float com 2 casas decimais, alterando a '.' para ',' 
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
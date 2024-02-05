// 4) Divisão e Resto de divisão
// Math.floor, arredonda o valor para o inteiro inferior mais próximo, ex: Resultado = 5.75 ficará Resultado = 5
function DivisibleAndRest(dividendo, divisor){
    console.log('Divisão: ' + Math.floor(dividendo / divisor));
    console.log('Resto de divisão: ' + (dividendo % divisor));
}
DivisibleAndRest(10, 3);
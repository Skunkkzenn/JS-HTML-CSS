// 2) Distingua os triângulos
// Equilátero: Os três lados são iguais. 
// Isósceles: Dois lados iguais. 
// Escaleno: Todos os lados são diferentes.
function IdentyTriangle(ladoA, ladoB, ladoC){
    if(ladoA === ladoB && ladoB == ladoC) {
        return 'Equilátero';
    }
    else if(ladoA === ladoB || ladoB == ladoC || ladoA === ladoC){
        return 'Isósceles';
    }
    else {
        return 'Escaleno';
    }
}
console.log(IdentyTriangle(5, 5, 5));
console.log(IdentyTriangle(5, 4, 5));
console.log(IdentyTriangle(4, 5, 2));
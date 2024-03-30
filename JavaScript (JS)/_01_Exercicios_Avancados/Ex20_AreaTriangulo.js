// Faga uma funqäo que recebe a base e a altura de um triångulo e retorne a årea desse triängulo. 
// A precisäo deverå ser de duas casas decimais, arredondando se necessårio.
// Obs: a förmula para calcular a årea de um triångulo é (base x altura) / 2

// Math.ceil() para arredondar para cima
// Math.floor() para arredondar para baixo
// toFixed() para determinar casas decimais

//Com arredondamento
function AreaTrianguloArredonda(base, altura){
    let area = (base * altura) / 2;
    return Math.ceil(area.toFixed(2));
}

//Sem arredondamento
function AreaTriangulo(base, altura){
    let area = (base * altura) / 2;
    return area.toFixed(2);
}

console.log(AreaTriangulo(10, 15))
console.log(AreaTriangulo(7, 9))
console.log(AreaTriangulo(9.25, 13.1))
console.log(AreaTrianguloArredonda(10, 15))
console.log(AreaTrianguloArredonda(7, 9))
console.log(AreaTrianguloArredonda(9.25, 13.1))
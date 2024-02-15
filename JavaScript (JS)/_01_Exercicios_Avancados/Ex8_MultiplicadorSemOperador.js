function Multiplicador(paramA, paramB){
    let resultado = 0;
    for(let i = 0; i < paramB; i++){
        resultado += paramA
    }
    return resultado;
}

console.log(Multiplicador(5, 5))
console.log(Multiplicador(0, 5))
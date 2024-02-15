function Repetir(repetir, qntRepeticoes){
    let resultado = []
    for(let i = 0; i < qntRepeticoes; i++){
        resultado.push(repetir) 
    }
    return resultado;
}

console.log(Repetir("código", 2))
console.log(Repetir(7, 3))


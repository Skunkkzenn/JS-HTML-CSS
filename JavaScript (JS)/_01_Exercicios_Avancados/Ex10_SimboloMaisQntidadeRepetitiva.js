function SimboloMais(valor){
    let string = '+';
    let resultado = '';

    for(let i = 0; i < valor; i++){
        resultado += string
    }
    return resultado
}

console.log(SimboloMais(2))
console.log(SimboloMais(10))
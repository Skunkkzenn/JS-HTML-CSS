function EstaEntre(minimo, maximo, numero, inclusivo = false){
    if(inclusivo){
        return numero >= minimo && numero <= maximo
    }
    return numero > minimo && numero < maximo
}

console.log(EstaEntre(10, 100, 50))
console.log(EstaEntre(16, 50, 100))
console.log(EstaEntre(3, 150, 3))
console.log(EstaEntre(3, 150, 3, true))

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
    }
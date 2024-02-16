function FiltrarNumeros(array){
    return array.filter(elemento => typeof elemento === 'number')
}

console.log(FiltrarNumeros(['a', 'b', 10, 20]))
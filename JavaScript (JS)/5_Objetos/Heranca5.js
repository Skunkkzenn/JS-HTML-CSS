console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('') //split gera um array, dps gera nova string, com valores invertidos
}

console.log('Escola Coder'.reverse())

Array.prototype.first = function(){
    return this[0] //acessa array a partir do this, no primeiro elemento
}

console.log([1, 2, 3, 4, 5].first())
console.log([a, b, c].first())

String.prototype.toString = function () { //Alterando o parâmetro toString pode alterar tudo
    return 'Lascou tudo'
}

console.log('Escola Coder'.reverse())

const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Juneisson', 'Gildevaldo']
const todos = filhas.concat(filhos)
const todos1 = filhas.concat(filhos, 'Fulano') //Adiciona novo elemento na última posição
console.log(todos, filhas, filhos)
console.log(todos1, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))
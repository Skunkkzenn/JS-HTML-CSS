const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//não se pode atribuir mais nada para a constante, mas o conteúdo do array podemos alterar

pilotos.pop() //Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Vestappen')
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona o elemento na primeira posicao do array
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Masssa') //no indice dois adiciona Bottas e Massa
console.log(pilotos)

//remover
pilotos.splice(3, 1) //no indice 3 remove um elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array é gerado a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //o indice 1 até o indice 4, mas o indice 4 não entra
console.log(algunsPilotos2)

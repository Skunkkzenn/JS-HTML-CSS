//é um objeto, mas ao inves de organizar os dados por chaves, organiza pelos índices [0,1,2]... indice 0, 1, 2
//Estrutura heterogenea, inteiros, doubles, strings etc... 
console.log(typeof Array, typeof new Array, typeof [])

//formas de criação
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //UNDEFINED

//adiciona elemento no array
aprovados[3] = 'Paulo' //Indicando a posicao
aprovados.push('Abia') //Adiciona na ultima posicao
console.log(aprovados.length)

//o tamanho do array será 10, mas ficará undefined pelas demais posições vazias
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined) //elementos existem, mas estão undefined, o indice 5 até o 9 estao vazios
console.log(aprovados[8] === null)

console.log(aprovados)
aprovados.sort() //altera o array, ordenando a mesma pela letra
console.log(aprovados)

//remove atributo do objeto
delete aprovados[1]
console.log(aprovados)
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
//Indice que começa a esquerda, qntd de indices a partir do inicio para remover a direita.
aprovados.splice(1, 2) //permite adicionar/remover elementos a um array, ou remover e adicionar ao mesmo tempo
console.log(aprovados)
//Adiciona elementos no array, sem excluir. Inserindo a partir do inicio do array o 'Elemento1' e 'Elemento2'
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') 
console.log(aprovados)
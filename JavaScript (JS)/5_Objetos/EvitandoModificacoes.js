//Object.preventExtensions -> não permite que o objeto seja extendido, nao vai permitir adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promotion'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Permite realizar todas as tarefas acima, APENAS NAO PERMITE ADICIONAR ATRIBUTOS AO OBJ!!!!

//Object.seal, não permite adicionar ou excluir os atributos do objeto, mas permite alterar os existentes
const pessoa = { nome: 'Juliana', idade: 13}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Caltro'
delete pessoa.nome
pessoa.idade = 34
console.log(pessoa)

//Object.freeze = selado + valores constantes, completamente constante

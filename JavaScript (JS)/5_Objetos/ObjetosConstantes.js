// pessoa -> 123 -> {...} pessoa aponta para 123, que no caso aponta para o objeto que está no endereço de memória
const pessoa = {nome: 'João'} // pessoa aponta para endereço de memória que terá João...
pessoa.nome = 'Pedro' //altera por não estar a ser alterado diretamente o objeto pessoa
console.log(pessoa)

//pessoa -> 456 -> {...}, desta forma estamos a trocar o endereço de memoria da pessoa, e isso dará error, pois pessoa é uma constante!
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //Congela o objeto pessoa, não permitindo mais alterações no objeto.
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC' // Não permite adicionar atributos dentro de pessoa
delete pessoa.nome //Não deixa excluir nada do objeto, o objeto fica inacessível por completo.
console.log(pessoa.nome) 
console.log(pessoa)

//Criar objeto desde a raiz com o freeze
const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
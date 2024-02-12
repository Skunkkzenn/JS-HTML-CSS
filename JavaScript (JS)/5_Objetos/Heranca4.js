function MeuObjeto(){}
console.log(MeuObjeto.prototype)

//Dois objetos diferentes, criados a partir de uma função construtora
const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto()

//os~objetos ficam apontados para o mesmo objeto raiz, por padrão? Sim.
//Todos os objetos criados a partir de uma função construtora, apontam para a mesma raiz(protótipo)
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__) // __proto__ -> funcao.prototype

MeuObjeto.prototype.nome = 'Anônimo' // Qlq objeto criado, terá como pai o atributo nome, 'anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}!`)
}

obj1.falar(); //anonimo, pois nao foi reescrito o nome

obj2.nome = 'Rafael' //nome alterado 
obj2.falar();

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //muda a referencia do prototipo objeto3, pra sair de Object.prototype pra MeuObjeto.prototype 
obj3.nome = 'Obj3'
obj3.falar()


//Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) //quando um objeto é instanciado a partir da funcao, eles sao iguais
console.log(MeuObjeto.__proto__ === Function.prototype) //MeuObjeto(funcao) atributo: __proto__ aponta para function.prototype por padrao
console.log(Function.prototype.__proto__ === Object.prototype)//prototipo, do prototipo de uma funcao, aponta para object.prototype
console.log(Object.prototype.__proto__ === null) // fim da cadeira, no caso o object é o ultimo objeto da árvore 
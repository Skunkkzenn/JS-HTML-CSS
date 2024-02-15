const pessoa = {
    nome: 'Victor',
    idade: 29,
    peso: 90
}

console.log(Object.keys(pessoa)) //Retorna todas as keys do obj
console.log(Object.values(pessoa))//Retorna os valores de dentro do obj
console.log(Object.entries(pessoa)) //Retorna a entrada do objeto em forma de array

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
}) // OU

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataDeNascimento = '01/01/2017'
console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa))

//object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 8}
const obj = Object.assign(dest, o1, o2) //contatena dentro do obj destino os valores que forem passados, 
                                        //mas se for valor repetido, vai sobreescrever pelo último valor inserido.

Object.freeze(obj)
obj.c = 124
console.log(obj)
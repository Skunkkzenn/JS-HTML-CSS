const ferrari = {
    modelo: 'f40',
    vmax: 324
}
const volvo = {
    modelo: 'v40',
    velMax: 220
}

console.log(ferrari.__proto__) //acessa o objeto prototico, o objeto pai
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(volvo.__proto__ === ferrari.__proto__)
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
//Diferenças entre JSON(interface de comunicação entre sistemas, com o uso de strings, convertidas em objetos)
//& JS
const obj = { a: 1, b: 2, c: 3, soma(){
    return a + b + c
    }
}
//Converendo para json, apenas formato textual, sem função, apenas texto pode ser alterado
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{'a':1, 'b':2, 'c': 3}"))
//console.log(JSON.parse("{a:1, b:2, c: 3}"))
console.log(JSON.parse('{"a":1, "b":2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))
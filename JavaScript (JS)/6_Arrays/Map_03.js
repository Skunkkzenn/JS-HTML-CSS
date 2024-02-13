//Funcionamento interno MAP
Array.prototype.map2 = function (callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.45}',
    '{ "nome": "Kit de Lapis", "preco": 44.45}',
    '{ "nome": "Caneta", "preco": 1.45}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
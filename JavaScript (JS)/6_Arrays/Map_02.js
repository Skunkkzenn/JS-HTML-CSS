const carrinho = [
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.45}',
    '{ "nome": "Kit de Lapis", "preco": 44.45}',
    '{ "nome": "Caneta", "preco": 1.45}'
]

//Retornar array apenas com os preços, utilizando o map
//Transformar/Converter as strings em objetos
const paraObjeto = json => JSON.parse(json)
//recebe como parametro o produto,retornando apenas o preço do mesmo
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
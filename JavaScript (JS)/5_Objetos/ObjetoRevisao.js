//coleção dinâmica de pares chave/valor
const produto = new Object() //função construtora
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    Modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Victor',
        idade: 29,
        endereco: {
            logradouro: 'Rua do Flamengo',
            numero: 1993
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 40
    }, {
        nome: 'Ana',
        idade: 19
        }],
        //Poderiamos ter funções dentro...
    calcularValorSeguro: function(){

    }
}

//se já conhecer os atributos
carro.proprietario.endereco.numero = 1000
//com o uso da string podemos adicionar dentro do atributo 
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
//se acessar um variavel indefinida, tenha cuidado com o erro!
console.log(carro.condutores)
console.log(carro.condutores.length)
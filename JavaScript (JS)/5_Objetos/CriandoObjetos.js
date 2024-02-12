// usando a notação literal
const obj1 = {}
console.log(obj1)

//Objeto em JS
console.log(typeof Object, typeof new Object())
const obj2 = new Object
console.log(obj2)

//funções construtoras
function Produto(nome, preco, desc){
    //variável/método fica visível para fora do objeto(variavel pública)
    //Apenas será possível alterar fora da função o valor de nome, os demais atributos são privados
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 799.99, 0.25)
console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('Victor', 3000.56, 1)
const f2 = criarFuncionario('Vinicius', 3300.56, 0)
console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))

//Object.Creat
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha)

//JSon.Parse
const fromJSON = JSON.parse('{"info": "SOU UM JSON"}')
console.log(fromJSON.info)
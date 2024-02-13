//Funcionamento Interno
Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray;
}


const produtos = [
    { nome: 'Notebook', preco: 2344, fragil: true },
    { nome: 'Monitor', preco: 1344, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.55, fragil: true },
    { nome: 'Copo de Plástico', preco: 1.55, fragil: false },
]   
//A melhor maneira de utilizar o filter, é criar duas funções arrows, assim otimizando o código
const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil // lembrar, fragil já é true o valor!
//console.log(produtos.filter(caro).filter(fragil))
console.log(produtos.filter2(caro).filter2(fragil))
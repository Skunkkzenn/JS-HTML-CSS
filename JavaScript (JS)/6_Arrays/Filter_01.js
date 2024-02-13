//Critérios de filtro
const produtos = [
    { nome: 'Notebook', preco: 2344, fragil: true },
    { nome: 'Monitor', preco: 1344, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.55, fragil: true },
    { nome: 'Copo de Plástico', preco: 1.55, fragil: false },
]   
                        //passar função callback, para percorrer cada um dos elementos do array(cada um dos produtos)
console.log(produtos.filter(function(p){
    //possível realizar operações com critérios, filtrando e gerando novas listas como resultado
    // return p.preco > 2000
    // return true;
    // return false;
     return p.preco > 1200;
}))

console.log(produtos.filter(function(elemento){
    return elemento.preco > 500 && elemento.fragil === true;
}))

//A melhor maneira de utilizar o filter, é criar duas funções arrows, assim otimizando o código
const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil // lembrar, fragil já é true o valor!
console.log(produtos.filter(caro).filter(fragil))
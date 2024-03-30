// Voce estå trabalhando numa aplicaqäo pessoal de controle de despesas. Na tela principal dessa aplicaqäo, é
// possivel adicionar produtos ou serviqos, informando nome, categoria e prep. Uma funcionalidade que voce
// estå desenvolvendo no momento é a de somar o total das despesas.
// Crie uma funqäo que receba um array de produtos e retorne o total das despesas.

function TotalDespesas(despesas){
    let total = 0; 
    
    despesas.forEach(despesa => {
        total += despesa.preco;
    });
    return total;
}


despesasTotais = [
    {nome: "Jornal online", categoria: "Informagåo", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
] // retornarå 239.99

despesasTotais2 = [
    {nome: "Jornal online", categoria: "Informagåo", preco: 3599.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 30999.90}
] // retornarå 239.99


console.log(TotalDespesas(despesasTotais2))
// 5) Alterar Caracteres e Redução de Casas Decimais
function CorrectValue(valorDecimal){
    //Criar uma var para armazenar o novo valor
    //Converter o valor de entrada em string, acrescentando os parâmetros necessários para a situação
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}
CorrectValue(3.00000000300)
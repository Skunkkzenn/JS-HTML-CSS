/* 

20)​ 
    Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
    para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
    Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
    informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
    nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. 
*/

function TrocaDeCedulas(valorSaque){
    //Criar Contadores
    //Esses contadores serão usados para contar quantas notas de cada denominação serão necessárias.
    let contador100 = 0;
    let contador50 = 0;
    let contador10 = 0;
    let contador5 = 0;
    let contador1 = 0;

    //Criar variável que irá calcular o valor da nota
    //A função chama calcularValorNota(valorSaque) para determinar qual é a maior nota que pode ser utilizada com base no valor total do saque.
    let valorNota = calcularValorNota(valorSaque)

    //A função utiliza um loop while para continuar retirando notas até que o valor do saque seja menor que o valor da menor nota disponível.
        while(valorSaque >= valorNota){
            
            //Utilizado para determinar qual é o valor da nota atual (valorNota) e, em seguida, atualizar o valor do saque e incrementar o contador correspondente.
            switch (valorNota) {
                case 100:
                    valorSaque -= 100
                    contador100++
                    break
                case 50:
                    valorSaque -= 50
                    contador50++
                    break
                case 10:
                    valorSaque -= 10
                    contador10++
                    break
                case 5:
                    valorSaque -= 5
                    contador5++
                    break
                case 1:
                    contador1++
                    valorSaque -= 1
                    break
            }
            
            //Após cada retirada de nota, a função chama novamente calcularValorNota para determinar qual é a próxima maior nota que pode ser retirada.
            valorNota = calcularValorNota(valorSaque)
            } 
            
            //Após o loop, a função retorna o resultado chamando elaborarResultado com os contadores de cada tipo de nota.
            return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
    }
    
//Criar função que irá calcular o valor da nota, de acordo com o que se foi pedido
//A função sempre retorna a maior cédula possível, de acordo com o valor restante do saque.
function calcularValorNota(valorSaque){
    if(valorSaque >= 100)     { return 100;}
    else if(valorSaque >= 50) { return 50; }
    else if(valorSaque >= 10) { return 10; }
    else if(valorSaque >= 5)  { return 5; }
    else if(valorSaque >= 1)  { return 1; }
}

//Criar função que irá agregar os contadores de cada nota
function elaborarResultado(contador100, contador50, contador10, contador5, contador1){
    let resultado = ''; // passa uma string vazia para ser reutilizada a frente

    //verifica se há notas para cada valor, se houver, incrementa o contador de cada nota e concatena à variável resultado
    if(contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `;
    }
    if(contador50 > 0){
        resultado += `${contador50} nota(s) de R$ 50. ` 
    }
    if(contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }
    if(contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }
    if(contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }
    return resultado;
}

console.log(TrocaDeCedulas(153));
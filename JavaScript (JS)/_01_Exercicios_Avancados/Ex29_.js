// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
function segundoMaior(arrayNum){
    let maior = arrayNum[0];
    // Inicializado com um valor negativo para garantir que qualquer número do array seja maior que esse valor
    let segundoMaior = -Infinity; 

    for(let i = 1; i < arrayNum.length; i++){
        const numeroAtual = arrayNum[i];

        if(numeroAtual > maior){
            segundoMaior = maior;
            maior = numeroAtual;
        } else if (numeroAtual > segundoMaior && numeroAtual !== maior) {
            segundoMaior = numeroAtual;
        }
    }

    return segundoMaior;
}

// Exemplo de uso:
const arrayNum1 = [10, 20, 30, 40, 50];
console.log(segundoMaior(arrayNum1)); // Saída: 40

const arrayNum2 = [50, 40, 30, 20, 10];
console.log(segundoMaior(arrayNum2)); // Saída: 40

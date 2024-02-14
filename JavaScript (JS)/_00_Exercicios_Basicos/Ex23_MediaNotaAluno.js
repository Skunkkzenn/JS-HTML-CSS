
/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. 

   * Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 
     Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 
     E "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function CalculoNota(codAluno, nota1, nota2, nota3){
    let notas = [];
    notas.push(nota1);
    notas.push(nota2);
    notas.push(nota3);
    //Utilizado para comparar cada par de elementos do array e determinar a ordem deles durante a ordenação.
    //Se o resultado da comparação a < b for verdadeiro, significa que a deve ser classificado após b, então retorna-se 1. 
    //Caso contrário, a deve ser classificado antes de b, então retorna-se -1.
    notas.sort((a, b) => a < b ? 1 : -1)

    //Passar o indice de cada uma das notas!!    
    let mediaFinal = ((notas[0] * 4) + (notas[1] * 3) + (notas[2] * 3)) / 10;

        console.log(`Cód. Aluno: ${codAluno} | Notas: ${notas[0]}, ${notas[1]}, ${notas[2]} | Media Final: ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado'}`)

}

CalculoNota(123, 2.8, 6, 3.5)

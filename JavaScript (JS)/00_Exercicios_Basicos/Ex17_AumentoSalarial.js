/* 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano  Aumento 
A  10% 
B  15% 
C  20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function AumentoSalarial(salario, plano){
    let planoA = 0.1;
    let planoB = 0.15;
    let planoC = 0.2;

    switch(plano){
        case 'A' || 'a': return salario += salario * planoA;
        case 'B' || 'b': return salario += salario * planoB;
        case 'C' || 'c': return salario += salario * planoC;
        default: return 'Inválido!';
    }

}

console.log(AumentoSalarial(1500, 'A'))
console.log(AumentoSalarial(1500, 'B'))
console.log(AumentoSalarial(1500, 'C'))
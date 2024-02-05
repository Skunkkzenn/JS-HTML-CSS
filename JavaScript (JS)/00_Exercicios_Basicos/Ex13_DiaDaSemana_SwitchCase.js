/* 13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function DiaDaSemana(dia){
    switch(dia){
        case 1:
            return 'Domingo';
        case 2: 
            return 'Segunda';
        case 3:
            return 'Terça';
        case 4: 
            return 'Quarta';
        case 5: 
            return 'Quinta';
        case 6:
            return 'Sexta';
        case 7:
            return 'Sábado';
        default:
            return 'Error';
        }
}

console.log(DiaDaSemana(7));
console.log(DiaDaSemana(12));
console.log(DiaDaSemana(4));
console.log(DiaDaSemana(1));
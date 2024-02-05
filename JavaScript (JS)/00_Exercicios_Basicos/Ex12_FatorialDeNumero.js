// 12) Faça um algoritmo que calcule o fatorial de um número. 

function Fatorial(numero){
    if(numero < 0) return 'Não é possível fatorar números negativos!';
    else if(numero === 0 || numero === 1) return 1;
    else {
        let resultado = 1;
        for(i = 2; i <= numero; i++){
            resultado *= i;
        }
        return resultado;
    }
}

console.log(Fatorial(3));
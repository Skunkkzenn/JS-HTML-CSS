// Fazer um programa para encontrar todos os pares entre 1 e 100.

function EncontraPar(){
    let inicio = 1;
    let fim = 100;
    while(inicio <= fim){
        if(inicio % 2 === 0){
        console.log(inicio);
        }
        inicio++;
    }
}

EncontraPar()
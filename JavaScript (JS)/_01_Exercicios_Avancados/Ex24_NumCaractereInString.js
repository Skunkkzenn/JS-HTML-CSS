// Desenvolva uma função que recebe um caractere e uma string como parametros e retorne a quantidade de
// vezes que o caractere se repete na string. A funqäo deverå ser case-sensitive, ou seja, irå diferenciar
// maiüsculas de minüsculas.

function EncontrarCharString(char, string){
    let totalRep = 0;

    for (const caractere of string) {
        if(char === caractere){
            totalRep++;
        }
    }
    return totalRep;
}

let frase = "Esta é uma frase de exemplo";

console.log(EncontrarCharString('s', frase));

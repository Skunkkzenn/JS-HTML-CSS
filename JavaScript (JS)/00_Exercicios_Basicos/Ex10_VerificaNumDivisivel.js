//10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false

function DivisaoCerta(numero){
    const valorFinal = numero % 3;

    if(valorFinal === 0) {
        return true;
    }
    else { 
        return false;
    }
}

console.log(DivisaoCerta(5));
console.log(DivisaoCerta(10));
console.log(DivisaoCerta(12));
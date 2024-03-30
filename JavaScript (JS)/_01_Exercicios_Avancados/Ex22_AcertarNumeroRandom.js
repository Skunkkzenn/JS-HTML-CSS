// Desenvolva uma funqäo que receba como parametro um nümero de 1 a 10. Intemamente, na funqäo, serå
// gerado um nümero aleat6rio de 1 a IO. A funqäo deverå retomar se o parametro de entrada foi igual ao nümero
// sorteado intemamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O nümero sorteado foi o X". Se
// näo for igual, retorne "Que pena! O nümero sorteado foi o X". X é o nümero que foi sorteado.

function AcertarNumero(numero){
    let numeroAleatorio = Math.floor((Math.random() * 10) + 1);

    if(numero >= 1 && numero <= 10){
        if(numero === numeroAleatorio){
            console.log(`Parabéns! O nümero sorteado foi o ${numeroAleatorio}`);
        }
        else{
            console.log(`Que pena! O nümero sorteado foi o ${numeroAleatorio}`);
        }
    }else{
        console.log("Apenas são válidos números de 1 a 10.")
    }
}

AcertarNumero(9)

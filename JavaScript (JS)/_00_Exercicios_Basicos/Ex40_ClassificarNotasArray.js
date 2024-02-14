/* 40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma. 
       De 0,0 a 4,9 seja atribuído o conceito D
       De 5,0 a 6,9 seja atribuído o conceito C
       De 7,0 a 8,9 o conceito B
       De 9,0 a 10,0 o conceito A. 
*/

let notas = [4.8, 5.9, 7.1, 9.9, 11]

function ConceitoNotas(){
    notas.forEach(element => {
        if (element >= 0 && element <= 4.9) {
            console.log(`Nota: ${element} - D`)
        }
        else if(element >= 5 && element <= 6.9){
            console.log(`Nota: ${element} - C`)
        }
        else if(element >= 7 && element <= 8.9){
            console.log(`Nota: ${element} - B`)
        }
        else if(element >= 9 && element <= 10){
            console.log(`Nota: ${element} - A`)
        }
        else { 
            return console.log('Error')
        }
    });
}

ConceitoNotas(notas);

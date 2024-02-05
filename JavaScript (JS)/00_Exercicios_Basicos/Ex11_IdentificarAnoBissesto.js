/* 

11) ​As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto; 
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras. 
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
mensagem e retornando  true ou false. 

*/

function AnoBissesto(ano){
    let divQuatrocentos = ano % 400 === 0;
    let divCem = ano % 100 === 0;
    let divQuatro = ano % 4 === 0;

    if(divQuatrocentos || divQuatro && !divCem){
        return true;
    }
    return false;
}

console.log('#1: ' + AnoBissesto(2014));
console.log('#2: ' + AnoBissesto(2016));
console.log('#3: ' + AnoBissesto(200));
console.log('#4: ' + AnoBissesto(400));
console.log('#5: ' + AnoBissesto(401));
console.log('#6: ' + AnoBissesto(820));
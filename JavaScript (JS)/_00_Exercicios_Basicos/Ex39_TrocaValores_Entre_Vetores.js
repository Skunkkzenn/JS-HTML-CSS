/* 39) 

​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o 
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. 
Faça a troca sem utilizar uma variável auxiliar.  

*/
 
let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = [6, 7, 8, 9, 10]

function TrocaElementos(vetor1, vetor2){
    vetor1.forEach((elemento, indice) => {
        vetor1[indice] = vetor2[indice];
    });
}

TrocaElementos(vetor1, vetor2)
console.log(vetor1)
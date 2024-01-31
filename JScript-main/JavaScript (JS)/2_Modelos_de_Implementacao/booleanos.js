/* !! LEMBRAR DA DUPLA NEGAÇÃO !! */

let isAtivo = false 
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // Dupla Negação, volta ao estado original da variável;

isAtivo = 0
console.log(!!isAtivo) //O mesmo exemplo para confirmar que 0 é falso

isAtivo = 1
console.log(!isAtivo) //Somente uma negação, o 1 passa a ser 0

isAtivo = 0
console.log(!isAtivo) //Somente uma negação, o 0 passa a ser 1

isAtivo = 0
console.log(!true) // Segue-se a mesma lógica

isAtivo = 1
console.log(!false) // Segue-se a mesma lógica

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //Basta espaço em branco que valida verdadeiro
console.log(!!'teste')//Ou mesmo com conteúdo valida como verdadeiro
console.log(!![])
console.log(!!{})
console.log(!!Infinity) //tipo infinito
console.log(!!(isAtivo = true)) //situação de atribuição, valor atribuido a variavel, se for resolvido para verdadeiro, dará verdadeiro

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // Teste se o nome esta preenchido ou não, se estiver preenchido é verdadeiro, mesmo que seja só um espaço
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // Assume o valor atribuídoa variável

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' ')) //Identifica apenas o valor verdadeiro
console.log(('' || null || 0 || '' || 123)) //a mesma lógica, mostra apenas o valor o verdadeiro

let nome = '' //falso!
console.log(nome || 'Desconhecido')

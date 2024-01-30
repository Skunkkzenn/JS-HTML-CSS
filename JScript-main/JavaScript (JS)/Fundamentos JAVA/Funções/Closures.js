// Closure é o escopo criado quando uma função é declarada
// Esse corpo permite a função acessar e manipular variáveis externas à função

//Contexto Léxico em ação.

const x = 'Global';

function fora(){
    const x = 'Local'
    function dentro() {
        return x;
    }
    return dentro
}

// Vai ler o valor que ele carrega dentro da função, não o que está fora
const minhaFuncao = fora();
console.log(minhaFuncao()); 


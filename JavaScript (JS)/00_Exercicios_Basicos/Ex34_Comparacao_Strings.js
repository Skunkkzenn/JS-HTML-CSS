/* 
    34)​ Construa uma função que receberá duas Strings de tamanhos variados
    Deve retornar True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function VerificaString(string1, string2){
   if(string1.toLowerCase() === string2.toLowerCase()){
        return true;
   }
   else {
    return false;
   }
}

console.log(VerificaString('asassd', 'asass'))
console.log(VerificaString('asassd', 'asassD'))
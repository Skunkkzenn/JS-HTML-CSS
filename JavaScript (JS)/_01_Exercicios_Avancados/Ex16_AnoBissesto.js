// A fim de manter o calendårio anual ajustado com o movimento de translaqäo da Terra, criou-se os anos
// bissextos, que tem 366 dias em vez dos 365 presentes nos anos normais.
// Para determinar se um ano é bissexto, é necessårio saber se ele é multiplo de 4. 
// Näo pode ser mültiplo de 100,
// exceto se for também mültiplo de 400.
// Com isso em mente, desenvolva uma funqäo que recebe um nümero correspondente a um ano e retorna se ele
// é bissexto ou näo.

function AnoBissesto(ano){
    const multiplo4 = ano % 4;
    const multiplo100 = ano % 100;
    const multiplo400 = ano % 400;


    if((multiplo4 === 0 && multiplo100 != 0) || multiplo400 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(AnoBissesto(2020))
console.log(AnoBissesto(2100))
console.log(AnoBissesto(2400))

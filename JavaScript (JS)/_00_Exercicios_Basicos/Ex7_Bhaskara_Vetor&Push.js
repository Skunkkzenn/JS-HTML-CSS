// 7) Bhaskara

function Bhaskara(ax2, bx, c){
    let resultados = []
    let delta = Math.pow(bx, 2) - (4 * ax2 * c);
    if(delta < 0) { return 'Delta Negativo!!!'}
    else {
        let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
        let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
        
        //Necessário realizar o push para puxar os resultados para dentro do vetor
        resultados.push(x1)
        resultados.push(x2)
        return resultados;
    }
}

console.log(Bhaskara(1, 3, 2))
console.log(Bhaskara(3, 1, 2))
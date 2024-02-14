function Inverso(valor){
    if(typeof valor === 'boolean') {
        return !valor;
    }
    else if (!isNaN(valor) && typeof valor === 'number'){
        return -valor
    }
    else {
        return `Booleano ou números esperado, mas o parâmetro é do tipo ${typeof valor}`
    }
}

console.log(Inverso(true));
console.log(Inverso("6"));
console.log(Inverso(-2000));
console.log(Inverso("programação"));



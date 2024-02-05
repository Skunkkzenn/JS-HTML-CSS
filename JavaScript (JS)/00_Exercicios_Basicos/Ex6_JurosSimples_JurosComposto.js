// 6) Capital de Juros Simples & Capital de Juros Composto
function CapitalSimples(capInicial, txJuros, tempoInv){
    capInicial += (capInicial * txJuros * tempoInv);
    return capInicial.toFixed(4);
}
console.log(CapitalSimples(1500, 0.10, 50))

function CapitalComposto(capInicial, txJuros, tempoInv){
    capInicial = capInicial * Math.pow((1 + txJuros), tempoInv)
    return capInicial.toFixed(2);
}
console.log(CapitalComposto(1500, 0.10, 50))

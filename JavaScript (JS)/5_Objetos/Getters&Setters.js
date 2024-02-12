const sequencia = {
    _valor: 1, // convencao, essa é uma var que é pretendida ser acessada apenas dentro da const sequencia
    get valor(){ return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
        this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 300
console.log(sequencia.valor, sequencia.valor) //usa o valor padrão, não aceita voltar para trás no valor
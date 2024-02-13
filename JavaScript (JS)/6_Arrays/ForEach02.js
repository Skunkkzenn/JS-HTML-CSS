//criou-se uma função no prototype do forEach2, com o callback,
Array.prototype.forEach2 = function (callback) { 
    for(let i = 0; i < this.length; i++) 
    {
        callback(this[i], i, this) /* funcao callback, chamando o 
                                      valor atual, indice e array completo */
    }
}

const aprovados = ['Victor', 'Maicon', 'Dirceu', 'Daronco']
           
aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})
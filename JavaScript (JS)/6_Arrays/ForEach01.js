const aprovados = ['Victor', 'Maicon', 'Dirceu', 'Daronco']
            //callback chamada para cada iteração, primeiro parameto o proprio elemento, 
            //segundo parametro, é o indice, vai ordenar de acordo com a forma que foi passado
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

//Arrow function
aprovados.forEach(nome => console.log(nome))

//passa uma função para fazer a leitura
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

//todos os parametros de um foreach
aprovados.forEach(function(nome, indice, array, x){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    console.log(x)
})
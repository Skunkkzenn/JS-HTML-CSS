const alunos = [
                 { nome: 'João', nota: 7.4, bolsista: false },
                 { nome: 'Ana', nota: 9.2, bolsista: true },
                 { nome: 'Pedro', nota: 9.2, bolsista: false },
                 { nome: 'Ana', nota: 8.7, bolsista: true },                 
                ]

                //agrupou o array dos alunos, apenas nas notas
                //neste caso vai somar sempre o acumulador, que está para trás
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0 //valor inicial do array
) 
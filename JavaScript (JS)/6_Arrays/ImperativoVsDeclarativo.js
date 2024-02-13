const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

//Imperativo (é escrito como passo a passo, sem falhas, com todos os detalhes, o foco é COMO ser feito)
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
} 
console.log(total1 / alunos.length)

//Declarativa (abordagem mais interessante, o foco é O QUE tem que ser feito)
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
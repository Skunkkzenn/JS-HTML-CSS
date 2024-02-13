//FlatMap - transformar 2 arrays em apenas 1 

const escola = [ {
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Helder',
        nota: 9.3 }]}, 
    {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Renata',
        nota: 14
    },{
        nome: 'Carlos',
        nota: 11
        }]
}]

const getNotaDoAluno = aluno => aluno.nota //extraindo a nota do aluno
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno) //turma, converter objetos do tipo alunos em arrays, buscando apenas a nota

const notas1 = escola.map(getNotasDaTurma) //Extrai apenas a nota da turma
console.log(notas1) 

console.log([].concat([ 8.1, 9.3 ], [ 14, 11 ]))

//Transformando em um único array
Array.prototype.flatMap = function(callback) {
                                            //passar array vazio e a callback para transformar os dados
    return Array.apply.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
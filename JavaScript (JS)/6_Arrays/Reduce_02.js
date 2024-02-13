const alunos = [
    { nome: 'João', nota: 7.4, bolsista: false },
    { nome: 'Ana', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.2, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },                 
   ]


//Entender bem a lógica destes exercícios
//Desafio 1: TODOS os alunos sao bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)) //apenas pegar o atributo bolsista, unificando a funcao todosBolsistas

//Desafio 2: ALGUM aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

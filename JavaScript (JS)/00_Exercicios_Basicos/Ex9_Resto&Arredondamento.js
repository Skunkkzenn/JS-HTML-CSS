// 9) Notas alunos
function NotasFinais(nota){
    let notaCorrigida = NotasPrimarias(nota)
    if (notaCorrigida < 40) { return `Aluno reprovado, com nota ${notaCorrigida}.`}
    else { return `Aluno aprovado, com nota ${notaCorrigida}.`}
}

function NotasPrimarias(nota){
    const restoDivisao = nota % 5;

    if (restoDivisao > 2) { 
        return nota + (5 - (restoDivisao))
    }
    else {
        return nota;
    }
    
}

console.log(NotasFinais(38))
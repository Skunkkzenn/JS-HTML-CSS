//Função Factory Simples - serve para otimizar a criação de objetos contendo os mesmo atributos

function criarPessoa(){
    return { 
        nome: 'Ana',
        sobrenome: 'Pereira'
    }
}

console.log(criarPessoa())
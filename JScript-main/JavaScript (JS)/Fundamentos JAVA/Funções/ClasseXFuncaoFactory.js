//Classe
class Pessoa {
    constructor(nome){ 
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


//factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()

//Converter classe pessoa em funcao construtora
function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}

const p3 = new Pessoa('Julião')
p3.falar()
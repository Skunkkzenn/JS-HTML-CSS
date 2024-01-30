console.log(Math.ceil(6.1)) // Como Math é um objeto, utilizamos esse objeto dentro do console para assim realizar o arredondamento para cima (ceil)

const obj1 = {}
obj1.nome = 'Bola' // Cria um atributo dentro do objeto, não sendo necessário definir tudo diretamente nele. 
                        //OU
//obj1['nome'] = 'Bola2' // Subscreve o atributo que já existia 

console.log(obj1.nome)

function Obj(nome) { 
    this.nome = nome  // Ao utilizar o 'this', recebe o atributo 'nome' por parâmetro e atribui 'this.nome' o nome tornando assim o 'NOME'
                        // público para quem instanciar essa função e trabalhar com o nome.

    this.exec = function () { // Também é possível criar funções dentro do Objeto a ser utilizado
        console.log('Executando....')
    }

} 

const obj2 = new Obj ('Cadeira')
const obj3 = new Obj ('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
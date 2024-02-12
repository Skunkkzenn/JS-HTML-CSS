
// função construtora
function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

//usar o operador new e instanciar os objetos a partir dessa função
const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//simulando operador new
function novo(f, ...params) {
    const obj = {} //criar objeto vazio
    obj.__proto__ = f.prototype //prototipo do objeto deve apontar para funcao.prototype
    f.apply(obj, params) //funcao apply, primeiro parameto é o objeto this, no caso o obj que acabamos de criar, segundo objeto é um array que é a lista de parâmetros que desejamos concatenar
    return obj
}
const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)
const pai = { nome: 'Pedro', corCabelo: 'Preto'}
const filha1 = Object.create(pai) //passa o pai como primeiro parâmetro, criando um objeto novo, tendo um prototipo o objeto pai

filha1.nome = 'Ana';
console.log(filha1.corCabelo)

//cria atributos para o objeto, setando algumas regras
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
});

console.log(filha2);
filha2.nome= 'Carla' //não permite alterar o nome de filha2 por ter definido a regra writable:False anteriormente
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

//exibir o que foi inserido de parâmetro dentro da classe
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? //aquela propriedade pertence ao proprio objeto ou pelo objeto herança?
        console.log(key) : console.log(`Por herança: ${key}`)
}
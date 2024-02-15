function RemoverPropriedade(objeto, propRemover){
    //Verificar se existe a propriedade dentro do obj
    if(objeto.hasOwnProperty(propRemover)){
        delete objeto[propRemover];
    }
}

const pessoa = {
    nome: 'Lucio',
    idade: 29,
    peso: 92
}


RemoverPropriedade(pessoa, "idade")
console.log(pessoa)
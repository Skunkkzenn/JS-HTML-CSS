function RemoverPropriedade(objeto, propRemover){
    //Verificar se existe a propriedade dentro do obj
    if(objeto.hasOwnProperty(propRemover)){
        delete objeto[propRemover];
    }
    return objeto
}

const pessoa = {
    nome: 'Lucio',
    idade: 29,
    peso: 92
}


console.log(Object.is(RemoverPropriedade(pessoa, "idade"), pessoa))
console.log(RemoverPropriedade(pessoa, "idade"))


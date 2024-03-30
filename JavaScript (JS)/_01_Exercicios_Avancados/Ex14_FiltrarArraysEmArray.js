// function FiltrarArray(array){
//     const newArray = [];
//     for(const item of array){
//         newArray.push([item[0], item[1]])
//     }
//     return newArray;
// }

function objetoParaArray(object) {
    const newArray = [];

    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            newArray.push([key, object[key]]);
        }
    }

    return newArray;
}

objeto = {
    nome: "Victor",
    profissao: "Desenvolvedor"
};

// const arrayResultado = objetoParaArray(objeto);
const resultado = objetoParaArray(objeto);
console.log(resultado);

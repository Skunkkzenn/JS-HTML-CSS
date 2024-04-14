// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
// objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas

// Função para trocar chaves e valores do objeto
function trocarChavesValores(objeto) {
    // Objeto para armazenar as chaves e valores invertidos
    const newObj = {};

    // Loop através de cada chave no objeto original
    for (const key in objeto) {
        // Obtém o valor correspondente à chave atual
        const valor = objeto[key];

        // Atribui a chave atual como valor e o valor como chave no novo objeto
        newObj[valor] = key;
    }

    // Retorna o novo objeto com chaves e valores invertidos
    return newObj;
}
console.log(trocarChavesValores({nome: "Victor", idade: 19}))
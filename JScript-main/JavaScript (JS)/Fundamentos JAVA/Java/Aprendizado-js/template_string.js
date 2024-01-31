const nome = 'Rebeca'
const concatencao = 'Olá' + 'Victor' + '!'

const template = `
Olá
${nome}!` // Executa a concatenação, funciona como um interpolador (interpretador)
            // aceitando as quebras de linhas!!
console.log(concatencao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`) // Só executa a soma pois possuí o interpolador($) em ${1 + 1};

const up = texto => texto.toUpperCase() // Converte todo o conteúdo string em maíusculo 'toUpperCase'
console.log(`Ei...${up('cuidado')}!`) // Variável 'up' dentro do método, todo conteúdo sai com letras maículas;

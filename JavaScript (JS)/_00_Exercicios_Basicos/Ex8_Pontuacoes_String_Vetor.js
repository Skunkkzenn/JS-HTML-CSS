// 8) Verificar qual o melhor jogo e qual o pior jogo

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
function avaliaPontuacoes(stringPontuacoes){
    // Divide a string de pontuações em um array usando a vírgula como separador.
    let pontuacoes = stringPontuacoes.split(",") 

    // Inicializa a variável para contar a quantidade de quebras de recordes.
    let qtdQuebraDeRecords = 0;

    //Inicializa a variável para armazenar o número do pior jogo.
    let piorJogo = 1; // 1 porque o primeiro jogo será considerado como o pior jogo

    //Inicializa a variável com a primeira pontuação. POSIÇÃO 0 do índice!!
    let maiorPontuacao = pontuacoes[0];

    //Inicializa a variável com a primeira pontuação. POSIÇÃO 0 do índice!!
    let menorPontuacao = pontuacoes[0];

    //Loop começa a partir do segundo jogo (i = 1), percorrendo todas as pontuações do índice
    for(let i = 1; i < pontuacoes.length; i++){

        // Verifica se a pontuação atual é maior que a maior pontuação registrada
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i];  // Atualiza a maior pontuação
            qtdQuebraDeRecords++ // Incrementa o contador de quebras de recordes
        }

        // Verifica se a pontuação atual é menor que a menor pontuação registrada
        else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)){
            menorPontuacao = pontuacoes[i]; // Atualiza a menor pontuação
            piorJogo = i+1; // Atualiza o número do pior jogo (i + 1 pois os jogos começam do 1)
        }
    }

    // Retorna um array contendo a quantidade de quebras de recordes e o número do pior jogo
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))
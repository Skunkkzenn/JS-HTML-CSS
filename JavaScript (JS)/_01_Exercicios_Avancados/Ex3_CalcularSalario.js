function CalculoSalario(horasTrabalhadas, valorHora){
    let valorFinal = 0;

    valorFinal = horasTrabalhadas * valorHora
    return console.log(`Salário igual à ${valorFinal.toFixed(2)}€`)
}

CalculoSalario(150, 40.5)
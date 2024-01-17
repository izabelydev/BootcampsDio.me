/*
    EXERCÍCIO CALCULAR O VALOR DE UMA VIAGEM USANDO INCREMENTO

    Faça um programa para calcular o valor de uma viagem

    Você terá 5 variáveis. Sendo elas:
    1 - Preço etanol;
    2 - Preço gasolina;
    3 - Tipo de combustível do carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

    Imprima no console o valor que será gasto na viagem.
*/

let distanciaKM = 100, carroKM = 10, pGasolina = 6.66, pEtanol = 5.79, pGasolinaKM, pEtanolKM, valorGasto, tipoCombustivel;

pGasolinaKM = pGasolina/carroKM; // Preço de 1 litro de gasolina por KM
pEtanolKM = pEtanol/carroKM; // Preço de 1 litro de etanol por KM

tipoCombustivel = 'gasolina';

if (tipoCombustivel === 'gasolina') {
    valorGasto = pGasolinaKM * distanciaKM;
    console.log('O valor gasto com gasolina é: R$', valorGasto.toFixed(2));
}

else if (tipoCombustivel === 'etanol') {
    valorGasto = pEtanolKM * distanciaKM;
    console.log('O valor gasto com etanol é: R$', valorGasto.toFixed(2));
}

else {
    console.log('Tipo de combustível não identificado.');
}

/*
EXERCÍCIO CALCULAR O VALOR DE UMA VIAGEM

Você terá 3 variáveis:

1 - Preço do combustível;
2 - Gasto médio de combustível por KM;
3 - Distância em KM da viagem;
*/

//PRIMEIRA FORMA DE RESOLVER
const pCombustivel1 = 5.58; // preço 1 litro de gasolina
const pCombustivelKM1 = pCombustivel1/12; // o carro anda 12km com 1 litro de gasolina
const distanciaKM1 = 248; //distância da viagem
const valorGasto1 = pCombustivelKM1 * distanciaKM1;

console.log('O valor gasto 1 é: R$', valorGasto1.toFixed(2));


//SEGUNDA FORMA DE RESOLVER (melhor)
let distanciaKM2 = 100, pCombustivel2 = 5.79, carroKM2 = 10, pCombustivelKM2, valorGasto2; 
// distancia da viagem KM, preço 1L de gasolina e o carro anda 10km com 1L de gasolina

pCombustivelKM2 = pCombustivel2/carroKM2;
valorGasto2 = pCombustivelKM2 * distanciaKM2;

console.log('O valor gasto 2 é: R$', valorGasto2.toFixed(2));
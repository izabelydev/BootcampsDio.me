//BOOLEAN: DEFINIR SE É VERDADEIRO OU FALSO

const camisaLucasAzul = true; //binario 1
const camisaJoaoAzul = false; // binario 0

//CONDICIONAL: VERIFICAR SE É VERDADEIRO OU FALSO

//Operadores para condicionais:
// > maior >= maior ou igual
// < menor <= menor ou igual
// % resto da divisão
// = atribuição
// === ou == igualdade
//2 == ignora o tipo de variavel | 3 === considera o tipo de variável (recomendado)

const numero = 11;
const numeroPar = (numero % 2) === 0;
console.log('O número ', numero, ' é par? ', numeroPar);
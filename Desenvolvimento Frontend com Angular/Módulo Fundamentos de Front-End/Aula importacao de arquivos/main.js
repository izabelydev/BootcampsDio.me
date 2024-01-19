
//importar funções que estão sendo exportadas do arquivo 21funcoes_gets_print.js
// const funcoes = require ('./21funcoes_gets_print');

// console.log(funcoes.gets());


const { gets, print } = require('./21funcoes_gets_print');
const qntDeAlunos = gets();

const numerosSorteados = [];

for (let i = 0; i < qntDeAlunos; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}


let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);




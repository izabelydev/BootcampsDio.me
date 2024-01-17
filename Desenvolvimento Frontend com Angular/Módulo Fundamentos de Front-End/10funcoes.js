//  FUNÇÕES

// Função é um pequeno trecho de código que pode ser executado quando solicitado

//sintaxe de uma função
function teste() {
    console.log('Teste');
} 

teste(); //solicitar a execução da função


// Função que não retorna um valor
function sayMyName(name) {
    console.log('Your name is ' + name);
}

sayMyName('Renan');


// Função que retorna um valor
function quadrado(valor) {
    return valor * valor;
}

console.log(quadrado(10));


function incrementarJuros(valor, percentualJuros) {
    return  valor + ((percentualJuros / 100) * valor);
}

console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));





//  ORGANIZAÇÃO DAS FUNÇÕES

// O código principal fica dentro da função main, na função main você executa funções secundárias quando necessario.

function main() {
    console.log('Código principal');
    console.log(incrementarJuros(100,20)); //função secundária sendo executada dentro da função main
}

main(); 








// Crie um programa que dado um número, imprima a tabuada

const number = 2;

for (let i = 0; i <= 10; i++) {
    const resultado = number * i;
    console.log(number +' x '+ i + ' = ' + resultado);
}


// Extra: crie um programa que seja capaz de percorrer uma lista e imprima cada número par encontrado

const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let i = 0; i < lista.length; i++) {

    const isNumeroPar = (lista[i] % 2) === 0;

    if (isNumeroPar) {
        console.log('O número ', lista[i], ' da lista é par');
    }
    
}



//  ENTENDENDO ESTRUTURAS DE REPETIÇÃO

// Executando "for" em uma string
const nome = 'Izabely Lourenço';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]); //Percorrer cada caracter da string: através do número do index o código identifica a posição da letra no array.
}



// Exibir média das notas

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(9);
notas.push(8);

let soma = 0;


for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media.toFixed(2));




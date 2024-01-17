//ESTRUTURA CONDICIONAL COM IF E ELSE

const numero = 10;
const isNumeroPar = (numero % 2) === 0;

if (isNumeroPar) {
    console.log('O número ', numero, ' é par.');
}

else // ou if (!isNumeroPar) {}
{
    console.log('O número ', numero, ' é ímpar.');
}



//ESTRUTURA CONDICIONAL COM ELSE IF

const numero2 = 4;
const isNumeroDivsivelPor2 = (numero2 % 2) === 0;

if (numero2 === 0) {
    console.log('Número inválido.');

}

else if (isNumeroDivsivelPor2) {
    console.log('O número ', numero2, ' é divisível por 2.');
}

else // ou if (!isNumeroDivsivelPor2) {}
{
    console.log('O número ', numero2, ' não é divisível por 2.');
}

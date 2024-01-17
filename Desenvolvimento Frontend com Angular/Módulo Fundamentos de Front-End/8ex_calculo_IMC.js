/*
    O IMC - Índice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Fórmula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:
    - Abaixo de 18.5 - abaixo do peso;
    - Entre 18.5 e 25 - peso normal;
    - Entre 25 e 30 - acima do peso;
    - Entre 30 e 40 - obeso;
    - Acima de 40 - obesidade grave;
*/

const peso = 80, altura = 1.75, IMC = peso / Math.pow(altura, 2);

if (IMC < 18.5) {
    console.log('IMC: ', IMC.toFixed(2), '| Abaixo do peso.')
}

else if (IMC >= 18.5 && IMC < 25) {
    console.log('IMC: ', IMC.toFixed(2), '| Peso normal.')
}

else if (IMC >= 25 && IMC < 30) {
    console.log('IMC: ', IMC.toFixed(2), '| Acima do peso.')
}

else if (IMC >= 30 && IMC <= 40) {
    console.log('IMC: ', IMC.toFixed(2), '| Obeso.')
}

else {
    console.log('IMC: ', IMC.toFixed(2), '| Obesidade grave.')
}
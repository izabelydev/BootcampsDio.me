/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Condição de pagamento:
    - À vista Débito - 10% de desconto;
    - À vista Dinheiro ou Pix - 15% de desconto;
    - Duas vezes, preço normal Sem Juros;
    - Acima de 2 vezes, 10% de Juros;

*/

const valorNormal = 100, debito = valorNormal * 0.9, dinheiroPix = valorNormal * 0.85, acimaDuasVezes = valorNormal * 1.1;
let condPagamento = 'Acima de duas vezes';

if (condPagamento == 'Débito') {
    console.log('Você recebeu 10% de desconto. Pague R$', debito.toFixed(2));
}

else if (condPagamento == 'Dinheiro' || condPagamento == 'Pix') {
    console.log('Você recebeu 15% de desconto. Pague R$', dinheiroPix.toFixed(2));
}

else if (condPagamento == 'Duas vezes') {
    console.log('Você pode parcelar sem juros. Pague 2x de R$', valorNormal.toFixed(2) / 2);
}

else {
    console.log('Você pode parcelar com 10% de juros. Valor total R$', acimaDuasVezes.toFixed(2));
}

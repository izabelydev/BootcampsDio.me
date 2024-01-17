//  O nome das funções precisam de verbos de ação para o código ficar mais semântico

//  1) CRIE UMA FUNÇÃO QUE IMPRIME O SEU NOME E SOBRENOME NO TERMINAL
function escrevaMeuNome(nome, sobrenome) {
    return 'Seu nome é ' + nome + ', seu sobrenome é ' + sobrenome;
}
// escrevaMeuNome('Izabely', 'Lourenço');



//  2) CRIE UMA FUNÇÃO QUE VERIFIQUE SE VOCÊ É MAIOR DE IDADE

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Izabely', 'Lourenço') + ' e você é maior de idade.');
    }
    else {
        console.log(escrevaMeuNome('Izabely', 'Lourenço') + ' e você é menor de idade.');
    }
}

verificarIdade(17);


//  Faça que a função verificarIdade chame a função escrevaMeuNome




//  4) SEPARE O EXERCÍCIO "FORMAS DE PAGAMENTO" EM FUNÇÕES

function classificarPag(condPagamento) {
    if (condPagamento === 'Débito') {
        return valorNormal * 0.9;
    }
    
    else if (condPagamento === 'Dinheiro' || condPagamento == 'Pix') {
        return valorNormal * 0.85;
    }
    
    else if (condPagamento === 'Duas vezes') {
        return valorNormal;
    }
    
    else {
        return valorNormal * 1.1;
    }
}

const valorNormal = 100; //declaração de vairável
(function () {
    console.log('Pague R$' + classificarPag('Dinheiro'));
}) ();

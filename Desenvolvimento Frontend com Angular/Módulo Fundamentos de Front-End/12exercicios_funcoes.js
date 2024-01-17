//  O nome das funções precisam de verbos de ação para o código ficar mais semântico

//  CRIE UMA FUNÇÃO QUE IMPRIME O SEU NOME E SOBRENOME NO TERMINAL
function escrevaMeuNome(nome, sobrenome) {
    return 'Seu nome é ' + nome + ', seu sobrenome é ' + sobrenome;
}
// escrevaMeuNome('Izabely', 'Lourenço');



//  CRIE UMA FUNÇÃO QUE VERIFIQUE SE VOCÊ É MAIOR DE IDADE

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Izabely', 'Lourenço') + ' e você é maior de idade.');
    }
    else {
        console.log(escrevaMeuNome('Izabely', 'Lourenço') + ' e você é menor de idade.');
    }
}

verificarIdade(17);


//Faça que a função verificarIdade chame a função escrevaMeuNome



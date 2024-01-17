/*
    Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a média e sua classificação conforme a tabela abaixo:

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 6.9, recuperação;
    - Média 7 ou mais, aprovado;
 */

const nota1 = 7, nota2 = 7, nota3 = 8, media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Média final: ', media.toFixed(2), '| Reprovado.')
}

else if (media >= 5 && media <= 6.9) {
    console.log('Média final: ', media.toFixed(2), '| Recuperação.')
}

else {
    console.log('Média final: ', media.toFixed(2), '| Aprovado.')
}
"use strict";
//-----------------------VARIÁVEIS-----------------------
// Tipos primitivios: boolean, number, string
// Sintaxes:
let ligado = false; //tipado (recomendado)
let desligado = true; //sem tipar
let nome = "Izabely";
let idade = 20; //com ou sem casa decimal
let altura = 1.6;
// Tipos especiais: null, undefined
// Sintaxes:
let nulo = null; //só pode receber nulo, não aceita string nem number
let indefinido = undefined; //só pode receber indefinido, não aceita string nem number
// Tipos abrangentes: any e void
let retorno; // retorna valores vazios
let retornoView; // aceita quarquer coisa (string, number, boolean, null, undefined)
//-----------------------OBJETOS-----------------------
// Objeto - sem previsibilidade
let produto = {
    nome: "Caneta",
    cor: "azul",
    preço: 3,
};
//objeto tipado com o tipo produtoLoja
let meuProduto = {
    nome: "Lápis",
    cor: "Grafite",
    preço: 2.5,
};
//-----------------------ARRAYS-----------------------
// Array
let dados = [1, 2, 3];
let dados2 = ["Dado 1", "Dado 2", "Dado 3"];
// Array de multi types (sem ordem)
let infos = [1, "Cliente"];
// Tuplas (array multi types com ordem pré-definida)
let boleto = ["Conta água", 199.9, 36243826];
// Métodos
dados.pop();
//-----------------------DATAS-----------------------
let aniversario = new Date("2003-08-22 19:00");
console.log(aniversario.toString());
//-----------------------FUNÇÕES-----------------------
// com ts é possível tipar as variáveis da função
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}!`;
}
console.log(addNumber(4, 7));
console.log(addToHello("Iza"));
// function multi types
function callToPhone(phone) {
    return `Ligando para ${phone}`;
}
console.log(callToPhone("11 995269973"));

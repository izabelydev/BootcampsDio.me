//-----------------------VARIÁVEIS-----------------------

// Tipos primitivios: boolean, number, string
// Sintaxes:

let ligado: boolean = false; //tipado (recomendado)
let desligado = true; //sem tipar

let nome: string = "Izabely";
let idade: number = 20; //com ou sem casa decimal
let altura: number = 1.6;


// Tipos especiais: null, undefined
// Sintaxes:

let nulo: null = null; //só pode receber nulo, não aceita string nem number
let indefinido: undefined = undefined; //só pode receber indefinido, não aceita string nem number


// Tipos abrangentes: any e void
let retorno: void // retorna valores vazios
let retornoView: any // aceita quarquer coisa (string, number, boolean, null, undefined)

//-----------------------OBJETOS-----------------------

// Objeto - sem previsibilidade
let produto: object = {
    nome: "Caneta",
    cor: "azul",
    preço: 3,
}

//Objeto - com previsibilidade
type produtoLoja = {
    nome: string;
    cor: string;
    preço: number;
}

//objeto tipado com o tipo produtoLoja
let meuProduto: produtoLoja = {
    nome: "Lápis",
    cor: "Grafite",
    preço: 2.5,
}

//-----------------------ARRAYS-----------------------

// Array
let dados: number[] = [1, 2, 3];
let dados2: Array<string> = ["Dado 1", "Dado 2", "Dado 3"];

// Array de multi types (sem ordem)
let infos: (string | number)[] = [1, "Cliente"];

// Tuplas (array multi types com ordem pré-definida)
let boleto:[string, number, number] = ["Conta água", 199.9, 36243826];


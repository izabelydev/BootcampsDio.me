// ESTRUTURA BÁSICA DE UM OBJETO

// Objeto agrupa valores, trabalha com chaves e valores

//sintaxe
const iza = {
    nome: 'Izabely',
    idade: 20
};

console.log(iza.nome);
console.log(iza.idade);

//editar valor do objeto

//adicionar valor
iza.altura = 1.63;

//deletar valor
delete iza.idade;

console.log(iza);




//MÉTODOS PARA UM OBJETO
// Método é uma função dentro de um objeto

const teste = {
    nome: 'Izabely',
    idade: 20,

    descrever: function () {
        // "this" contexto onde a função esta sendo executada, nesse caso dentro deste objeto chamado teste
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};

// invocar a função no terminal
teste.descrever();

//editar as informações da função que esta dentro do objeto (método)
teste.nome = 'Amanda';
teste.idade = 30;
teste.descrever();


//sobrescrever a função no contexto em que ela está, nesse caso estará na Amanda
teste.descrever = function () {
    console.log(`${this.nome} sobrescreveu a função.`);
}
teste.descrever();





//  ACESSANDO DINAMICAMENTE VALORES DE UM OBJETO

//sintaxe dinâmica
const atributo = 'nome';
console.log(teste[atributo]); // nome da Amanda

//sintaxe de acesso direto
console.log(teste.nome);


//  CLASSES CRIAM MODELO DOS OBJETOS SEM PRECISAR ESCREVER O MESMO CÓDIGO VARIAS VEZES

// a classe irá definir (definição) como são as "pessoas" e ela será instanciada (terá uma ocorrência)
class pessoas{
    nome;
    idade;

    // função (não precisa escrever function dentro da classe)
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

// o objeto "iza" é a instância (ocorrência) da classe "pessoas"
// const iza = {
//     nome: 'Izabely',
//     idade: 20,

//     descrever: function () {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
//     }
// };


// Maneira correta de instanciar a classe
const iza = new pessoas();
iza.nome = 'Izabely Lourenço';
iza.idade = 20;

console.log(iza);
iza.descrever();











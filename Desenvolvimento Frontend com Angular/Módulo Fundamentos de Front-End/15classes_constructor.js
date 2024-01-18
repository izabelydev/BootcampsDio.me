//  Quando uma pessoa for instanciada na classe "pessoas", pode acontecer de instanciar sem inserir nenhum valor.
// O constructor faz com que todas as pessoas passem por ele quando forem instanciadas

class pessoas{
    nome;
    idade;
    anoDeNascimento;

    constructor (nome, idade) {
        this.nome = nome; // irá receber o parâmetro nome
        this.idade = idade; // irá receber o parâmetro idade
        this.anoDeNascimento = 2024 - idade; //preparação de um novo atributo
    } // isso obriga a pedir o nome e a idade na hora de instanciar

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos. Eu nasci em ${this.anoDeNascimento}.`);
    }
}

const iza = new pessoas('Izabely', 21);
iza.descrever();
console.log(iza);


// EXEMPLO DE UMA FUNÇÃO RECEBENDO PARÃMETROS DE UM OBJETO

class pessoas{
    nome;
    idade;
    anoDeNascimento;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade; 
    } 

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos. Eu nasci em ${this.anoDeNascimento}.`);
    }
}


function compararPessoas (p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}


const iza = new pessoas('Izabely', 20);
const joao = new pessoas('João', 21);

compararPessoas(iza,joao);


/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilometro rodade. Crie um método que dado a quantidade de quilometros e o preço do combustível, nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor (marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcularGastoViagem (distanciaKM, precoCombustivel) {
        return distanciaKM * this.gastoMedioKm * precoCombustivel;
    }
}



const uno = new Carro('Fiat', 'Prata', 1/12);
console.log(`O gasto da viagem é R$` + uno.calcularGastoViagem(70, 5).toFixed(2));







/*
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos: nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)). Instancie uma pessoa chamada Iza que tenha 51kg de peso, 1.63 de altura e peça para a Iza dizer o valor do seu IMC.
*/


class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc () {
        return this.peso / Math.pow(this.altura,2);
    }

    classificarImc() {
        const IMC = this.calcularImc();

        if (IMC < 18.5) {
            return ' (abaixo do peso)';
        }
        
        else if (IMC >= 18.5 && IMC < 25) {
            return ' (peso normal)';
        }
        
        else if (IMC >= 25 && IMC < 30) {
            return ' (acima do peso)';
        }
        
        else if (IMC >= 30 && IMC <= 40) {
            return ' (obesidade)';
        }
        
        else {
            return ' (obesidade grave)';
        }
    }
}

const iza = new Pessoa('Izabely', 51, 1.63);
console.log(`O IMC de ${iza.nome} é ` + iza.calcularImc().toFixed(2) + iza.classificarImc());
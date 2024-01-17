//  EXEMPLO PRÁTICO COM FUNÇÕES


function calcularImc (peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc (IMC) {

    if (IMC < 18.5) {
        return 'Abaixo do peso.';
    }
    
    else if (IMC >= 18.5 && IMC < 25) {
        return 'Peso normal.';
    }
    
    else if (IMC >= 25 && IMC < 30) {
        return 'Acima do peso.';
    }
    
    else if (IMC >= 30 && IMC <= 40) {
        return 'Obeso.';
    }
    
    else {
        return 'Obesidade grave.';
    }
}

// main
(function () {
    const peso = 75, altura = 1.75, IMC = calcularImc(peso, altura);
    console.log('IMC: ' + IMC.toFixed(2) + ' | Classificação: ' + classificarImc(IMC));
})(); //função imediatamente invocada (não precisa ter um nome)



//  É possível atribuir uma nova função para uma função já escrita no código. Ex:
main = function () {
    console.log('Nova função');
}

main();
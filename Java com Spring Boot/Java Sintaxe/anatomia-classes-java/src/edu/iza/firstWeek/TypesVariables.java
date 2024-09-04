package edu.iza.firstWeek;
public class TypesVariables {
    public static void main(String[] args) throws Exception {
        byte age = 25; 
        // 8 bits (1 byte) | -128 a 127 | valores inteiros pequenos, economiza memória
        short year = 2021; 
        // 16 bits (2 bytes) | -32.768 a 32.767 | valores inteiros maiores
        int cep = 19450000; 
        // 32 bits (4 bytes) | aproximadamente -2 bilhões a 2 bilhões | valores inteiros que não se encaixam nos tipos byte ou short.
        long cpf = 48269475826L; 
        // 64 bits (8 bytes) | aproximadamente -9 quintilhões a 9 quintilhões | valores inteiros que excedem a faixa de um int. O sufixo L é recomendado para literais longos.
        float pi = 3.14F; 
        // 32 bits (4 bytes) | precisão de 7 dígitos decimais | números de ponto flutuante com precisão simples. O sufixo F é necessário para indicar que o valor é um float.
        double wage = 1275.59; 
        // 64 bits (8 bytes) | precisão de 15 dígitos decimais | números de ponto flutuante com precisão dupla. É mais preciso que float e não requer sufixo para literais.

        // casting: processo de converter um valor de um tipo de dado para outro (exceto constantes "final"). Exemplo:
        int num = 10;
        long biggerNum = num;

        // sintaxe final: final tipo NOME = valor;
        final int NUMBER = 10;
        System.out.println(NUMBER);
    }
}
// Simbolos especiais que tem significado proprio 

/*
    Operadores Aritméticos
        + (Adição)
        - (Subtração)
        * (Multiplicação)
        / (Divisão)
        % (Resto)

    Operadores de Atribuição
        = (Atribuição)
        += (Atribuição com adição)
        -= (Atribuição com subtração)
        *= (Atribuição com multiplicação)
        /= (Atribuição com divisão)
        %= (Atribuição com resto)
            
    Operadores de Comparação / Relacionais
        == (Igual a)
        != (Diferente de)
        > (Maior que)
        < (Menor que)
        >= (Maior ou igual a)
        <= (Menor ou igual a)
            
    Operadores Lógicos
        && (E lógico)
        || (OU lógico)
        ! (Negação)

    Operadores Bit a Bit
        & (E bit a bit)
        | (OU bit a bit)
        ^ (XOR bit a bit)
        ~ (Complemento bit a bit)
        << (Deslocamento à esquerda)
        >> (Deslocamento à direita)
        >>> (Deslocamento à direita sem sinal)

    Operadores Unários
        ++ (Incremento)
        -- (Decremento)
        - (Negação)
        + (Positividade)
        ! (Negação lógica)
            
    Operadores Ternários
        ? : (Operador ternário)
*/
package edu.iza.firstWeek;
import java.util.Objects;

public class Operators {
    public static void main(String[] args) throws Exception {
        // inverter valor de variavel boolenana -------------------------------------
        boolean variavel = true;
        variavel = !variavel;
        System.out.println(variavel);

        // sintaxe operador ternario -------------------------------------------------
        int x, y;
        
        x = 5;
        y = 6;
        
        String result = Objects.equals(x, y) ? "X same Y" : "X different Y";
        System.out.println(result);

        // comparar strings e objetos ------------------------------------------------
        String nome1, nome2;

        nome1 = "Iza";
        // nome2 = "Iza"
        nome2 = new String ("Iza");

        // .equal(objects) | Operadores relacionais (strings)
        System.out.println(nome1.equals(nome2));
    }
}
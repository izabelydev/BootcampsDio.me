// A primeira classe sempre tem que ter o nome do arquivo e precisa comecar com letra maiuscula e deve ser camelCase
package edu.iza.firstWeek;

public class Variables {
    //METODOS
    // Para definir uma classe executavel (que realiza uma inicializacao) precisa do metodo main

    // Retorno vazio
    public static void main(String[] args) {
        // VARIAVEIS
        // O nome das variaveis pode conter apenas letras, underline, numeros ou cifrao
        // final => garantir que o valor da variavel nao sera alterado

        // Chamar um metodo
        final String firstName = "Izabely";
        final String secondName = "Lourenço";

        String fullName = fullName(firstName, secondName);
        System.out.println(fullName);
    }

    // Retornar uma string
    public static String fullName(String firstName, String secondName) {
        return "Resultado do método: " + firstName.concat(" ").concat(secondName);
    }
}
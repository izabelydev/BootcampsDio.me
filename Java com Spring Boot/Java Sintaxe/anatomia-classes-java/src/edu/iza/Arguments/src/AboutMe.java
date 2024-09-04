package edu.iza.Arguments.src;

public class AboutMe {
    // RECEBER PARAMETROS EXTERNOS
    // Comando: java AboutMe Iza Lourenco 21 1.60 ou adicionar o "args" na classe no arquivo launch.json
    /* EXEMPLO JSON
     * {
            "type": "java",
            "name": "AboutMe",
            "request": "launch",
            "mainClass": "edu.iza.Arguments.src.AboutMe",
            "projectName": "anatomia-classes-java_c05b0053",
            "args": [
                "IZABELY",
                "LOURENCO",
                "21",
                "1.62"
            ]
        }
     */
    public static void main(String[] args) {
        String name = args[0];
        String lastName = args [1];
        int age = Integer.valueOf(args[2]);
        double height = Double.valueOf(args[3]);

        System.out.println("\nOla, me chamo" + name + " " + lastName + "\nTenho " + age +" anos\nMinha altura e " + height);
    }
}

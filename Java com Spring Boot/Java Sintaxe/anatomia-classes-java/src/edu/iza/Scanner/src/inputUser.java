package edu.iza.Scanner.src;

import java.util.Locale;
import java.util.Scanner;

public class inputUser {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

        System.out.println("\nDigite seu nome: ");
        String name = scanner.next();

        System.out.println("Digite seu sobrenome: ");
        String lastName = scanner.next();

        System.out.println("Digite sua idade: ");
        int age = scanner.nextInt();

        System.out.println("Digite sua altura: ");
        double height = scanner.nextDouble();

        System.out.println("\nOla, me chamo " + name + " " + lastName + "\nTenho " + age +" anos\nMinha altura e " + height);
    }
}

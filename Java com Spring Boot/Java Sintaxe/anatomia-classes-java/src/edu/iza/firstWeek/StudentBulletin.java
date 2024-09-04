package edu.iza.firstWeek;

public class StudentBulletin {
    public static void main(String[] args) {
        int finalAvarage = 10;
        if (finalAvarage < 6)
            System.out.print("REPROVADO");
        else if (finalAvarage == 6)
            System.out.print("PROVA MINERVA");
        else
            System.out.print("APROVADO");
    }
}
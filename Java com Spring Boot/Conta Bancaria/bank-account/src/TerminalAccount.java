import java.util.Locale;
import java.util.Scanner;

public class TerminalAccount {
    public static void main(String[] args) throws Exception {
        /* TODO: 
            - Importar classe Scanner
            - Exibir mensagens para o usuario
            - Obter input do usuario no terminal
            - Exibir mensagem da conta criada
         */ 

        Scanner input = new Scanner(System.in).useLocale(Locale.US);
        
        System.out.println("\n---------- ABRIR CONTA ----------");
        System.out.println("Numero da conta: ");
        int accountNum = input.nextInt();

        System.out.println("\nAgencia (sem o digito): ");
        int agencyNum = input.nextInt();

        System.out.println("\nDigito: ");
        int agencyDig = input.nextInt();

        System.out.println("Nome: ");
        String name = input.next();

        System.out.println("Digite o saldo da conta: ");
        double accountBalance = input.nextDouble();

        System.out.println("\n---------- CONTA CRIADA ----------");
        System.out.printf("Conta: %d \nAgencia: %d-%d \nNome: %s \nSaldo: %.2f", accountNum, agencyNum, agencyDig, name, accountBalance);
    }
}

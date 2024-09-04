public class Usuario {
    public static void main(String[] args) throws Exception {
        SmartTv smartTv = new SmartTv();
        System.out.println("\nTV ligada: " + smartTv.ligada);
        System.out.println("Canal atual: " + smartTv.canal);
        System.out.println("Volume atual: " + smartTv.volume);

        smartTv.ligar();
        // smartTv.desligar();
        smartTv.mudarCanal(13);
        // smartTv.aumentarCanal(); // 2
        // smartTv.diminuirCanal(); // 1
        smartTv.aumentarVolume(); // 26
        // smartTv.diminuirVolume(); // 25
        System.out.println("\n-------- NOVO STATUS --------");
        System.out.println("TV ligada: " + smartTv.ligada);
        System.out.println("Canal atual: " + smartTv.canal);
        System.out.println("Volume atual: " + smartTv.volume);
    }
}

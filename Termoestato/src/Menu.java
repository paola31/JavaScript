import java.util.Scanner;

public class Menu
{
    private Termoestato termoestato = new Termoestato(true);
    private Scanner scanner = new Scanner(System.in);
    private int opcion = 0;

    public void render()
    {
        do {
            menu();
        }
        while (this.opcion != 5);
    }

    private void menu()
    {
        System.out.println("***** Elige una opción ***** \n 1. Subir temperatura \n 2. Bajar temperatura \n 3. Apagar termostato \n 4. Mostrar temperatura actual \n 5. Salir");
        this.opcion = this.scanner.nextInt();
        int grados = 0;

        switch(opcion)
        {
            case 1:
                System.out.println("¿Cuántos grados deseas subir?");
                grados = this.scanner.nextInt();
                if(grados < 0)
                {
                    System.out.println("Por favor, ingresa un número válido mayor que cero.");
                }
                else
                {
                    this.termoestato.subirTemperatura(grados);
                }
                break;

            case 2:
                System.out.println("¿Cuántos grados deseas bajar?");
                grados = this.scanner.nextInt();
                if(grados < 0)
                {
                    System.out.println("Por favor, ingresa un número válido mayor que cero.");
                }
                else
                {
                    this.termoestato.bajarTemperatura(grados);
                }
                break;

            case 3:
                this.termoestato.apagar();
                break;

            case 4:
                System.out.println("La temperatura actual es: " + this.termoestato.getTemperatura());
                break;

            case 5:
                System.out.println("Aplicacion terminada5");
                return;

            default:
                System.out.println("Opcion no valida.");
        }
    }
}

import java.util.Random;

public class Termoestato
{
    private int temperatura = 0;
    private boolean estado = false;

    Termoestato(boolean parametroEstado)
    {
        Random random = new Random();
        this.temperatura = random.nextInt(16) + 15;
        this.estado = parametroEstado;
    }

    Termoestato(boolean parametroEstado, int parametroTemperatura)
    {
        this.estado = parametroEstado;
        this.temperatura = parametroTemperatura;
    }

    public int getTemperatura()
    {
        return this.temperatura;
    }

    public void setTemperatura(int parametroTemperatura)
    {
        this.temperatura = parametroTemperatura;
    }

    public void subirTemperatura(int parametroGrados)
    {
        if(this.estado == true)
        {
            this.temperatura += parametroGrados;
            System.out.println("La temperatura subió a: " + this.temperatura);
        }
        else
        {
            System.out.println("El termoestato esta apagado");
        }
    }

    public void bajarTemperatura(int parametroGrados)
    {
        if(this.estado == true)
        {
            this.temperatura -= parametroGrados;
            System.out.println("La temperatura bajo a: " + this.temperatura);
        }
        else
        {
            System.out.println("El termoestato esta apagado");
        }
    }

    public void apagar()
    {
        this.estado = false;
        System.out.println("El termoestato ha sido apagado");
    }

    public void setEstado(boolean parametroEstado)
    {
        this.estado = parametroEstado;
    }
}

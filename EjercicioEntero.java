import java.util.Locale;
import java.util.Scanner;

public class EjercicioEntero {
    public static void main(String[] args) {
        int opcionUsuario;
        do{
            System.out.println("---------------------------------------------------------------");
            System.out.println("Bienvenido al menú, por favor elija que ejercicio quiere ver:");
            System.out.println("1) Area de un Triangulo");
            System.out.println("2) Cambio de signo de un numero");
            System.out.println("3) Euros a pesetas");
            System.out.println("4) Media de dos números");
            System.out.println("5) Nota que necesito para alcanzar la media deseada en la segunda evaluación");
            System.out.println("6) Salario semanal pagado por horas");
            System.out.println("7) Volumen de un cono");
            System.out.println("8) Salir");
            System.out.println("---------------------------------------------------------------");

            Scanner sc= new Scanner(System.in);
            opcionUsuario=sc.nextInt();

            switch (opcionUsuario){
                case 1:
                double area= areaTriangulo();
                    System.out.println("*********************************");
                    System.out.println("el area del triangulo es: "+ area);
                    System.out.println("*********************************");
                    break;
                case 2:
                    double cambioSigno = cambioSigno();
                    System.out.println("*********************************");
                    System.out.println("El resultado es " + cambioSigno);
                    System.out.println("*********************************");
                    break;
                case 3:
                    double pesetas = eurosPesetas();
                    System.out.println("*********************************");
                    System.out.println("El resultado es " + pesetas);
                    System.out.println("*********************************");
                    break;
                case 4:
                    double media=mediaNumeros();
                    System.out.println("*********************************");
                    System.out.println("La media es :" + media);
                    System.out.println("*********************************");
                    break;
                case 5:
                    double notaDeseada=notaCurso();
                    if (notaDeseada>10){
                        System.out.println("la media deseada no es alcanzable, necesitas mas de 10 para llegar.");
                    } else if (notaDeseada < 0) {
                        System.out.println("la media deseada es muy baja, incluso sacando 0 tu media seria mayor.");
                    }else System.out.println("Para sacar la media deseada de te tienes que sacar :" + notaDeseada);
                    break;
                case 6:
                    double salario = salarioHora();
                    System.out.println("*********************************");
                    System.out.println("El salario semanal que te corresponde es de : " + salario +" euros");
                    System.out.println("*********************************");
                    break;
                case 7:
                    double volumen=volumenCono();
                    System.out.println("*********************************");
                    System.out.println("el volumen del cono es :" + volumen);
                    System.out.println("*********************************");
                    break;
                case 8:
                    System.out.println("Ha elegido la opcion salir! Hasta luego!!");
                    break;
                default:
                    System.out.println("La opción no es valida, intente nuevamente");
            }
        }while(opcionUsuario!=8);
    }

//ejercicio área triangulo
    public static double areaTriangulo() {
        Scanner sc = new Scanner(System.in);
        sc.useLocale(Locale.US);
        double altura, base;

        System.out.println("Ingrese la altura");
        altura = sc.nextDouble();

        System.out.println("Ahora inserte la base");
        base = sc.nextDouble();
        double resultado = base * altura;

        return resultado;
    }
//ejercicio Cambio signos
    public static double cambioSigno(){
        Scanner sc = new Scanner(System.in);
        sc.useLocale(Locale.US);
        double numero;
        System.out.println("Inserte el numero: ");
        numero= sc.nextDouble();
        double resultado;
        if( numero >0){
            resultado = numero*- 1;
        } else if (numero<0) {
            resultado= numero*-1;
        }else {
            resultado = 0;
        }
        return resultado;
    }
//ejercicio euros a pesetas
    public static double eurosPesetas(){
        Scanner sc = new Scanner(System.in);
        System.out.println("por favor ingrese la cantidad en euros: ");
        double euros = sc.nextDouble();
        return euros * 166.386;
    }
//ejercicio media numeros:
    public static double mediaNumeros(){
        Scanner sc = new Scanner(System.in);
        sc.useLocale(Locale.US);
        System.out.println("Ingrese el primer numero");
        double numero1=sc.nextDouble();
        System.out.println("Ingrese el segundo numero");
        double numero2=sc.nextDouble();
        return numero1+numero2/2;
    }
//ejercicio nota curso:
    public static double notaCurso(){
        Scanner sc = new Scanner(System.in);
        sc.useLocale(Locale.US);
        double nota1,nota2,mediaDeseada;
        System.out.println("Ingrese la primera nota");
        nota1 = sc.nextDouble();
        System.out.println("Ingrese ahora la media deseada");
        mediaDeseada=sc.nextDouble();
        nota2=((mediaDeseada-(nota1*0.4))/0.6);
        return nota2;
    }
//ejercicio salario hora:
    public static double salarioHora(){
        Scanner sc = new Scanner(System.in);
        sc.useLocale(Locale.US);
        System.out.println("por favor ingrese cuantas horas ha trabajado esta semana : ");
        double horasTrabajadas = sc.nextDouble();
        final double valorHora=13.5;
        return  horasTrabajadas * valorHora;
    }
//ejercicio volumen cono:
    public static double volumenCono(){
        Scanner sc = new Scanner(System.in);
        sc.useLocale(Locale.US);
        System.out.println("Ingrese por favor el radio del cono");
        double radioCono=sc.nextDouble();
        System.out.println("Ahora ingrese la altura del cono");
        double alturaCono=sc.nextDouble();
        return ((1.0 / 3) * Math.PI * Math.pow(radioCono, 2) * alturaCono);
    }
}

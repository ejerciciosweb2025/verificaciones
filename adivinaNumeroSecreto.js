function generaNumeroSecreto(valorMax){
    let numero = Math.ceil(Math.random()*valorMax);
    //console.log(numero);
    numero = parseInt(numero);
    return numero;
}

function acertarNumeroSecreto(){
   const MAX = 100;
   let numeroSecreto = generaNumeroSecreto(MAX);
   let probandoNumero = 0;
   let intentos = 0;
   let salir    = false;
   console.log(numeroSecreto);
    do{
        probandoNumero = prompt("Dime un número a ver si lo averiguas o pulsa 0 para salir: ");
        probandoNumero = validarNumero(probandoNumero);
        if(probandoNumero==0){
            salir = true;
        }
        if(probandoNumero==numeroSecreto){
            console.log("Has acertado con el número secreto");
        }
        else{
            console.log("No has acertado el número secreto");
            intentos=intentos+1;
        }
    }while(probandoNumero!=numeroSecreto && salir==false);
    return intentos;
}
function validarNumero(numero){
    let esNumero = false;
    while(esNumero==false){
        if(isNaN(numero)){
            console.log("No es un número");
            numero = prompt("Introduce un número...si quieres salir: ");
        }
        else{
            console.log("Es un número");
            esNumero=true;
        }
    }
    return parseInt(numero);   
}

function imprimirMenu(){
    console.log("-----------MENU------------");
    console.log("1- Jugar a Adivinar numero secreto");
    console.log("0----Salir");
}

let opcion=1;
let numeroSecreto=0;
let misintentos=0;
do{
    imprimirMenu();
    opcion = prompt("opción escogida del menu");
    opcion = validarNumero(opcion);
    switch(opcion){

        case 1:
            misintentos = acertarNumeroSecreto();
            console.log("Has acertado el número. El número de intentos es: ",misintentos);
            break;
        case 2:
            console.log("Gracias por usar el programa");
        default:
            console.log("Has pulsado otra opcion. Escribe 1\nComenzar programa o 0\n Para salir ");
    }
}while(opcion!=0);


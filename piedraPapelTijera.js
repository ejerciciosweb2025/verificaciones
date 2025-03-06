/**Piedra Papel y Tijera

Crea un programa en Javascript que simule el juego de piedra, papel y tijera. 

Para ello, la piedra se representará como 1, Papel como 2 y Tijera con 3. 

Nuestro juego tendrá 2 jugadores uno que serás tú y otro que será la máquina. 

Nuestra máquina generará una lista de valores
 aleatorios Piedra, Papel o Tijera (recuerda Math.random) y estos valores los compararemos con los nuestros para saber quién ha ganado de los 2.

Recuerda que:

    Papel gana a la Piedra
    Tijera gana al Papel
    Piedra gana a la Tijera

Al terminar nuestra jugada de 3 turnos deberá ganar el jugador o la máquina (bucle de 3).
Comprueba prueba el resultado.

Nota: En el ejercicio se puede hacer si se desea un menú.  */

//let jugador = new Array(2);
//Genero mi lista de jugadores vacíos
console.log("Genero mi lista de jugadores vacíos");
console.log("0 - Máquina");
console.log("1 - Jugador");
let jugador = [];
jugador.push(0); //maquina
jugador.push(1); //jugador
console.log(jugador);
let nombreJugador=["Máquina","Jugador"];

//Genero posibilidades de losjugadores vacíos
console.log("Genero posibilidades de los jugadores vacíos");
let juego = [];
console.log("1 - Piedra");
juego.push(1);//piedra
console.log("2 - Papel");
juego.push(2);//papel
console.log("3 - Tijera");
juego.push(3);//tijera
console.log(juego);
let nombreJuego=["Piedra","Papel","Tijera"];
console.log("---------------------------------");


function tiradaJuego( eleccionJuego1, eleccionJuego2){
    //papel vs piedra
    let ganadorJugada = 0;
    if( (eleccionJuego1==2 && eleccionJuego2==1) ){
        ganadorJugada = 0; //maquina

    }
    else if (eleccionJuego2==2 && eleccionJuego1==1){
       
        ganadorJugada = 1; //jugador
    }//tijera gana a papel
    else if(eleccionJuego1==3 && eleccionJuego2==2){
        ganadorJugada = 0; //maquina
        //ganadorJugada = 0; //maquina

    }
    else if(eleccionJuego1==2 && eleccionJuego2==3){
        ganadorJugada = 1; //jugador
        //ganadorJugada = 1; //jugador

    }//piedra gana a tijera
    else if(eleccionJuego1==1 && eleccionJuego2==3){
        ganadorJugada = 0; //maquina
        //ganadorJugada = 0; //maquina

    }
    else if(eleccionJuego1==3 && eleccionJuego2==1){
        ganadorJugada = 1; //jugador
        //ganadorJugada = 1; //jugador
    }
    return ganadorJugada;

}
function menu(){
    let opcion =1;
    do{
        console.log("---------------MENU----------------------");
        console.log("1-Jugar al juego de piedra papel y tijera");
        console.log("2-Salir del programa");
        
        opcion = prompt("Escribe que opción deseas realizar");
        console.log("-----------------------------------------");

        if( opcion==1){
            generoJugadores();
        }
        else{
            console.log("Gracias por usar el programa");
        }

    }while(opcion!=2);
}

function generarvalorAleatorioMaquina(MAX){
    let valorAleatorio = Math.ceil(Math.random()*MAX);
    return valorAleatorio;
}

function valoresMaquina(){// no lo uso
   /* let jugadasMaquina=[];
    let valorMaquina =0;
    for( let i=0;i<MAX;i++){
        valorMaquina=parseInt(generarvalorAleatorioMaquina(MAX));
        jugadasMaquina.push(valorMaquina);
    }
    //console.log(jugadasMaquina);
    return jugadasMaquina;*/
}

function generoJugadores(){
  generarvalorAleatorioMaquina(MAX);
  console.log(generarvalorAleatorioMaquina);
}


function elegirTurnoJugador(entra){
    let jugador=0;
    if( entra % 2 == 0){ // PAR
        jugador =1;
    }
    else{// IMPAR
        jugador = 0;
    }
    return jugador;
}
function validarNumero(numero){
    let esNumero = false;
    while(esNumero==false){
        if(isNaN(numero)){
            console.log("No es un número");
            numero = prompt("Introduce un número...si quieres salir: ");
        }
        else{
            //console.log("Es un número");
            esNumero=true;
        }
    }
    return parseInt(numero);   
}


function tiradaPersona(){
    //let mano = prompt("1-Piedra\n2-Papel\n3-Tijeras");
    let mano = Math.ceil(Math.random()*MAX);
    mano = validarNumero(mano);
    return mano;
}

function turno(){
    //let jugadasMaquina = valoresMaquina();
    let valorMaquina = 0;
    let valorPersona = 0;
    let ganaJuego    = 0;
    console.log("jugadas TURNOS");

    let intentos     = 0;
    let turnoJugador = 0;
    let numeroTurnoJugador = 1;
    console.log("JUGADAS");

    /* console.log( turnosJugadores(1) ) ;
    console.log( turnosJugadores(2) ) ;
    console.log( turnosJugadores(3) ) ;*/ 


        while( intentos!=MAXTURNOS){
            turnoJugador = elegirTurnoJugador( numeroTurnoJugador);
            numeroTurnoJugador=numeroTurnoJugador+1;
            console.log("Turno Jugador: ",jugador[turnoJugador]);

            if(turnoJugador == 0){ //maquina
                console.log("La máquina ha escogido en su turno");
                valorMaquina = generarvalorAleatorioMaquina(MAX);
                console.log(valorMaquina);
            }
            else{ //persona
                console.log("La persona ha escogido en su turno");
                valorPersona = tiradaPersona();
                console.log(valorPersona);
            }

            if( intentos ==1 || intentos ==3 || intentos==5 ){
                console.log(`------ TURNO ${intentos}-------`);
                ganaJuego = tiradaJuego(valorMaquina,valorPersona);

                //if( ganaJuego )
                console.log("Gana juego: jugador:", ganaJuego);

                jugadasMaquina.push(valorMaquina);
                jugadasPersona.push(valorPersona);
                jugadasJuego.push(ganaJuego);


              
            }

            intentos = intentos + 1;
        }
}

function valoresPersona(){ // no lo uso
    /*let jugadasPersona=[];
    let valorPersona =0;
    let tiradaValida = true;
    let numeroTiradas = 0;

    while( tiradaValida ){
        valorPersona=tiradaPersona();

        if ( numeroTiradas <=3 ){
            jugadasPersona.push(valorPersona);
            numeroTiradas=numeroTiradas+1;
        }
        else{
            tiradaValida = false;
        }
    }
    //console.log(jugadasMaquina);
    return jugadasPersona;*/
}

function ganador(jugadasJuego){
    let mmaquina=0;
    let mjugador=0;
    let resultado=0;

    for( let i=0;i<jugadasJuego.length;i++){
        if(jugadasJuego[i]==0){//maquina
            mmaquina+=1;
        }
        else if(jugadasJuego[i]==1){ //jugador
            mjugador+=1;
        }
    }
    console.log("Maquina" +mmaquina);
    console.log("Jugador" +mjugador);

    if(mjugador>mmaquina){
        resultado=1;
    }
    else if (mjugador<mmaquina) {
        resultado=0;
    }
    console.log(resultado);

    return resultado;

}

const MAX = 3;
const MAXTURNOS = MAX*2;
let jugadasMaquina = [];
let jugadasPersona = [];
let jugadasJuego   = [];
let resultadoGanador = 0;
//menu();

turno();

console.log("Maquina:"+jugadasMaquina);
console.log("Persona:"+jugadasPersona);
console.log("Juego:"+jugadasJuego);
resultadoGanador = ganador(jugadasJuego);

//ganador(jugadasJuego);

console.log(resultadoGanador);
console.log(`El ganador del juego es ${nombreJugador[resultadoGanador]}`);


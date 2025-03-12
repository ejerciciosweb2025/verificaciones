//crear baraja de cartas
let baraja = [];
let tipos  = ['C','D','P','T'];
let maquina = [];
let jugador = [];
let entrarSegundaVez=false;
let valorGanador=0;
let valorPerdedor=0;
let salir = false;

for ( let i=1;i<=10; i++){
    for( let j=0;j<tipos.length;j++){
        baraja.push(i+tipos[j]);
    }
}


/* baraja = mezclarCartas(baraja);
console.log(baraja);*/



//crear mezclas de cartas
function mezclarCartas( cartas ){
    cartas = _.shuffle(cartas);
    return cartas;
}

/*function eliminarUltimoCaracter( lista){
    let listaMenos1 = [];
    for( let i=0;i<lista.length;i++){
        listaMenos1.push(lista[i]);
    }
    return listaMenos1;
}*/

function ganador( maquina, jugador){
    let sumaJugador=0;
    let sumaMaquina=0;
    for( let cartaJugador of jugador){
      sumaJugador+=cartaJugador;
    }

    for( let cartaMaquina of maquina){
        sumaMaquina+=cartaMaquina;
    }
    if(   (sumaJugador <= sumaMaquina) && (sumaMaquina<=21) ){
        ganador = 0;
        valorGanador=sumaMaquina;
        valorPerdedor=sumaJugador;
    }
    else if((sumaJugador > sumaMaquina) && (sumaJugador<=21)){
        ganador = 1;
        valorGanador=sumaJugador;
        valorPerdedor=sumaMaquina;
    }
    else if((sumaJugador <= sumaMaquina) && (sumaJugador>=21)){
        ganador = 1;
        valorGanador=sumaJugador;
        valorPerdedor=sumaMaquina;
    }
    else if((sumaJugador > sumaMaquina) && (sumaMaquina>=21)){
        ganador = 0;
        valorGanador=sumaJugador;
        valorPerdedor=sumaMaquina;
    }
    else{
        //Gana la máquina por la gorra
        ganador = 0;
        valorGanador=sumaJugador;
        valorPerdedor=sumaMaquina;
    }
    return ganador;
}


function turnoJugador() {
    let cartaJugador =0;
    let cartaMaquina=0;
    let plantarse = false;
    let vencedor   = 0;
    for( let i=1;i<=2;i++){
        if( entrarSegundaVez && i%2==0){
            let plantearsePlantarse = prompt("¿Quieres plantarte?: s/n: ");
            if(plantearsePlantarse=="s"){
                plantarse=true;
            }
        }
        if(i%2==0){ //PARES TURNO JUGADOR
            console.log("JUGADOR: "+i);
            if( plantarse == false){
                //saco carta jugador
            cartaJugador  = baraja.pop();
            //console.log(cartaJugador);
            cartaJugador  = cartaJugador.slice(0,-1);
            //console.log(parseInt(cartaJugador));
            jugador.push(parseInt(cartaJugador));
            //console.log(jugador);
            entrarSegundaVez=true;
            }
            else{
                vencedor = ganador(maquina,jugador);
                console.log("Te has plantado");
                console.log("Veamos los resultados,",vencedor);
                console.log("La puntuación del vencedor",valorGanador);
                console.log("La puntuación del perdedor ",valorPerdedor);
                console.log("Juego terminado - Inicia de nuevo");
                salir=true;

            }
            
        }
        else{ // TURNO MAQUINA
            console.log("MAQUINA: "+i);
            if(plantarse == false){
                //saco carta maquina
                cartaMaquina = baraja.pop();
                cartaMaquina  = cartaMaquina.slice(0,-1);
                maquina.push(parseInt(cartaMaquina));

                //console.log(maquina);
            }
            else{
                
                vencedor = ganador(maquina,jugador);
                console.log("Te has plantado");
                console.log("Veamos los resultados",vencedor);
                console.log("La puntuación del vencedor",valorGanador);
                console.log("La puntuación del perdedor ",valorPerdedor);
                console.log("Juego terminado - Inicia de nuevo");
                salir=true;
            }

        }
    }
}

function menu(){
    let opcion = 1;
    let intentos = 0;
    baraja = mezclarCartas(baraja);//por si no baraja
    do{
        console.log("1-Barajar Cartas");
        console.log("2- Iniciar / Continuar Juego");
        console.log("3-Salir");
        console.log("4- Mostrar cartas");
        opcion = prompt( "Elige opcion: ");

        switch(opcion){
            case '1':
                baraja = mezclarCartas(baraja);
                console.log(baraja);
                entrarSegundaVez=false;
                break;
            case '2':
                turnoJugador();
                intentos++;
                console.log("Número de intentos", intentos);
                console.log("Mira la opción 4 para ver resultados");
                break;
            case '3':
                console.log("Gracias por usar el programa");
                break;
            case '4':
                console.log("Las cartas de la baraja son: ")
                console.log(baraja);
                console.log("Las cartas del jugador son: ")
                console.log(jugador);
                console.log("Las cartas de la maquina son: ")
                console.log(maquina);
                break;
        }
    }while( opcion !='3' && salir==false);
}
/*let array = [1,2,3,4,5];
array = _.shuffle(array);
console.log(array);*/
/**
 * Escribe un programa en Javascript que realice el juego del BlackJack o 21.
El programa debe solicitar a un usuario si quiere jugar al juego
Si desea barajar las cartas de una baraja de 40 cartas
(se pueden usar librerías externas como shufftle de underscore si se desea)
Y escoger la mano de si piensa que plantarse, tirar jugada y compararla con la máquina y ver quien ha ganado o salir.
Para simplificar el juego vamos a tratar con 40 cartas y el que sume 21 gana, en caso de empatar gana el jugador. 
No contaremos con las cartas especiales.
El juego consiste en preguntar al usuario o a la máquina si se quiere plantar o continuar y el primero que llegue a 21 gana la partida. 
 */

menu();


/*Realiza un programa en Javascript que pida una frase 
al usuario y pida una palabra. Se debe contar el número 
de veces que aparece esa palabra en la frase*/

let frase = prompt("Escribe una frase");
console.log(frase);
let palabra = prompt("Escribe una palabra");
console.log(palabra);

let palabrasFrase = frase.split(" ");
console.log(palabrasFrase);

let guardaLista=[];
let contadorPalabras=0;

function contarPalabra(palabrasFrase, palabra){
   
    palabrasFrase=palabrasFrase.split();
    let contador=0;
    for ( elemento of palabrasFrase ){
        console.log(elemento);
        elemento.includes(palabra);
            if(elemento.includes(palabra)){
                contador=contador+1;
            }
          
        }
         //return [guardaLista, contador];
    return contador;
    }


contadorPalabras=contarPalabra(frase, palabra);

console.log(" la frase contiene la palabra:  " +contadorPalabras);
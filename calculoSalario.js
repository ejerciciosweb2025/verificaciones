/** Datos de entrada */
//let nombre      = prompt("Escriba su nombre");
let nombre      = "Pepe";
//let apellidos   = prompt("Escriba sus apellidos");
let apellidos   = "Rodriguez";
/* Se puede convertir a Numero 
con parseInt, parseFloat o Number*/
//let edad        = parseInt(prompt("Escriba su edad"));
let edad        = 50;
//let salario     = Number(prompt("Escriba su salario"));
let salario     = 1000;



/* Se valora el salario */
if( salario <1000){
    if(edad<30){
        salario=1100;
    }
    else if(edad<=45){
        salario=salario*1.03;
    }
    else{
        salario=salario*1.15;
    }
}
else if(salario<=2000){
    if(edad>45){
        salario=salario*1.03;
    }
    else{
        salario*=1.1;
    }
}
let imprimir = document.querySelector(".imprimir");
console.log(imprimir);
let imprimire = `<p> Persona ${nombre} ${apellidos} edad: ${edad} años, salario: ${salario} </p>`;
console.log(`Persona ${nombre} ${apellidos} edad: ${edad} años, salario: ${salario}`);
imprimir.innerHTML+=imprimire;

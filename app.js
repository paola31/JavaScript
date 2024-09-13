
// Comentario de una linea

/*
 * Comentario multilinea
 */

//console.log("Hola Mundo");

// Variables

/*let numero1 = 45;
let numero2 = 39;
let suma, resta, multiplicacion;


const pi = 3.14156;

let estado = true;

let numero3=78;

let direccion = "CALLE 11 # 40-69";


numero3 = 125;


console.log(numero1);
console.log(numero2);
console.log(pi);
console.log(estado);
console.log(numero3);
console.log(direccion);


suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;


console.log(suma)


// Concatenar valores

console.log('EL PRIMER VALOR ES: ' + numero1);
console.log('EL SEGUNDO VALOR ES: ' + numero2);
console.log('LA SUMA DE ' + numero1 + ' Y ' + numero2 +' ES: ' + suma);
console.log('LA SUMA DE ' , numero1 , ' Y ' , numero2 ,' ES: ' , suma);

// Literal Template
console.log(`LA SUMA DE ${numero1} Y ${numero2} ES: ${suma}`);
console.log(`LA RESTA DE ${numero1} Y ${numero2} ES: ${resta}`);
console.log(`LA MULTIPLICACION DE ${numero1} Y ${numero2} ES: ${multiplicacion}`);

let nu1 = parseInt(prompt("Ingrese el primer valor"));
let  nu2 = parseInt(prompt("Ingrese el segundo valor"));

let  s = nu1+nu2;

//console.log("El primer valor ingresado es : ${nu1} y el segundo valor es. ${nu2}");
//console.log("LA SUMA: ${s}" `);


//let generation = parseInt(prompt("Ingresa tu año de nacimiento: "));

//if (generation >= 1883 && generation <= 1900) {
//    console.log("ERES DE LA GENERACIÓN PERDIDA");
}*/

/*let generation = parseInt(prompt("Ingresa tu año de nacimiento: "));

if (isNaN(generation)) {
    console.log("Por favor, ingresa un año válido.");
} else {
    if (generation >= 1883 && generation <= 1900) {
        console.log("ERES DE LA GENERACIÓN PERDIDA");
    } else if (generation >= 1901 && generation <= 1924) {
        console.log("ERES DE LA GENERACIÓN GRANDIOSA");
    } else if (generation >= 1925 && generation <= 1945) {
        console.log("ERES DE LA GENERACIÓN SILENCIOSA");
    } else if (generation >= 1946 && generation <= 1964) {
        console.log("ERES DE LA GENERACIÓN BABY BOOMER");
    } else if (generation >= 1965 && generation <= 1980) {
        console.log("ERES DE LA GENERACIÓN X");
    } else if (generation >= 1981 && generation <= 1996) {
        console.log("ERES DE LA GENERACIÓN MILLENNIAL");
    } else if (generation >= 1997 && generation <= 2012) {
        console.log("ERES DE LA GENERACIÓN Z");
    } else if (generation >= 2013  && generation <= 2025) {
        console.log("ERES DE LA GENERACIÓN ALPHA");
    } else {
        console.log("INTENTÁLO DE NUEVO");
    }
}
*/

/*let tabla = parseInt(prompt("Ingrese la tabla de multiplicar que desea ver:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} * ${i} = ${tabla * i}`);
} */

/*const  temperatura = 18;
const  lluvia = false;

if (temperatura> 20 && !lluvia)
{
    console.log ("Es un buen dia para ir al parque");
}
else if (temperatura < 20 && !lluvia)
    console.log("Es un dia frio")*/

  /*  let menu, bebida, conBebida;
    switch (menu = prompt("Tipo de menu: sopa, pasta, ensalda").toLowerCase())
    {
        case "sopa":
            conBebida = prompt("¿Desea beber agua?").toLowerCase();
            bebida = conBebida.toLowerCase() == "si" ? "Agua" : "Ninguna";
            break;

        case "pasta":
            conBebida = prompt("¿Desea beber vino tinto?").toLowerCase();
            if(conBebida.toLowerCase() == "si")
            {
                bebida = "Vino Tinto";
            }
            else
            {
                bebida = "Ninguna";
            }
            break;

        case "ensalda":
            conBebida = prompt("¿Desea beber vino blanco?").toLowerCase();
            bebida = conBebida.toLowerCase() == "si" ? "Vino Blanco" : "Ninguna";
            break;
        default:
            bebida = "Elija sopa, pasta, ensalada";
            break;

    }

    let mensajeBebida = conBebida.toLowerCase() == "si" ? "Con bedida: Si, Bebida: " + bebida : "";
    let mensajeMenu = "Menu: " + menu + " " + mensajeBebida;

alert(mensajeMenu); */


let mes, estacion;
mes = parseInt(prompt("Indica el número del mes 1 al 12"));
switch (mes)
{
    case 12:
    case 1:
    case 2:
        estacion = "Invierno";
        break;
    case 3:
    case 4:
    case 5:
        estacion = "Primavera";
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Verano";
        break;
    case 9:
    case 10:
    case 11:
        estacion = "Es Otoño";
        break;
    default:
        estacion = "desconocida";
}
alert("La estación del año es" + " " + estacion);
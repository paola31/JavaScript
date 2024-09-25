/*let num;
let sum = 0;
while ((num = parseInt(prompt("Ingrese un numero positivo: "))) > 0) {
  sum += num;
  console.log(sum);
}
console.log("la suma total es:", sum);




let opcion;
let estado = true;


alert("seleccione una opción \n 1. Raiz \n2.Seno  ")*/

/*let opcion;

let estado = true;

let coseno, seno, raiz, numero;

// opciones realizar un calculo matematic

// 1. Raiz
// 2. Seno
// 3. Coseno

while(estado){

  opcion = (parseInt(prompt(`SELECCIONE UN OPCION \n 1. Raiz \n 2. Seno de N1 \n 3. Coseno N1 \n 4. Salir`)));

  switch(opcion){

    case 1: alert("Selecciono Raiz");

      numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR LA RAIZ`)));

      raiz = Math.sqrt(numero);

      alert(`LA RAIZ DE ${numero} ES: ${raiz}`);

      break;
    case 2 : alert("Selecciono Seno N1");

      numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL SENO`)));

      seno = Math.sin(numero);

      alert(`EL SENO DE ${numero} ES: ${seno}`);

      break;

    case 3 : alert("Selecciono Coseno N1");

      numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL COSENO`)));

      coseno = Math.cos(numero);

      alert(`EL SENO DE ${numero} ES: ${coseno}`);

      break;

    case 4: alert("SALIENDO....")
      estado = falso;
      break;
    default:
      alert("LA OPCION NO EXISTE");

  }
}
*/



//

// Comentarios

/*

Comentarios multilinea

*/

// Variables

/*

var

let

const

*/
/*
let numero = 5;

numero = 15;

numero = 45;

console.log(numero);


let decimal = 12.5;

decimal = 25.6;

decimal = 15.7;

console.log(decimal);

let estado = true;

estado = false;

console.log(estado);

const direccion = "cra 15-2-63";

console.log(direccion);

const pi = 3.141516;

console.log(pi);
let opcion1, opcion2, suma;


opcion1 = parseInt(prompt("Ingrese numero1 positivo"));
opcion2 = parseInt(prompt("Ingrese numero2 positivo"));

suma = opcion1 + opcion2;

alert(suma);
*/

// Estructuras condicionales if - else
/*
let opcion = parseInt(prompt("1. Consignar \n 2. Retirar \n 3. Consultar Saldo"));


switch (opcion) {

    case 1:

        alert("Vas a cosignar");

        break;

    case 2:

        alert("Vas a retirar");

        break;
*/

//Aréa circulo pi * aréa * arena
//Aréa cuadrado a = lado * lado
// Aréa triángulo = a = b*a/2


// let aCirculo, aCuadrado, aTriangulo;
// let pi, r, lado, base, h;
// let opcion;
// const pi =3.1416;
// //let estado = true;
//
//
// do {
//
//   opcion = parseInt(prompt("1. Aréa del circulo \n 2. Aréa del cuadrado 3.\n  Aréa del triángulo"));
//
//   switch (opcion) {
//     case 1:
//       alert("Aréa del circulo");
//       r = parseInt(prompt("Ingrese el valor del radio"));
//       aCirculo = pi * (r * r);
//       alert("El aréa del circulo es : " + aCirculo);
//       break;
//
//     case 2:
//       alert("Aréa del cuadrado");
//       lado = parseInt(prompt("Ingrese el valor del lado"));
//       aCuadrado = (lado * lado);
//       alert("El aréa del cuadrado es" + aCuadrado);
//       break;
//
//     case 3:
//       alert("Aréa del triángulo");
//       base = parseFloat(prompt("Ingrese la base del triángulo"));
//       h = parseFloat(prompt("Ingrese la altura del triángulo "));
//       aTriangulo = (base * h) / 2;
//
//       alert("El aréa del triángulo es " + aTriangulo);
//       break;
//
//     case 4 :
//       alert("Saliendo......")
//       //estado = false;
//       break;
//
//     default:
//       alert("Opción no válida")
//   }
// }
//   while (opcion !=4);

//********************************************WHILE EJERCICIO OPERACIONES MATEMATICAS**********************************************

// let opcion;
// let estado = true;
// let n1,n2,sum,res,ra;
//
// n1 = parseInt(prompt(`Ingrese el primer valor`));
// n2= parseInt(prompt(`Ingrese el segundo valor`));
//
//
// while(estado){
//
//   opcion = parseInt(prompt(`1. Suma \n 2. Resta \n 3. Raiz \n 4. Salir`));
//   switch(opcion){
//     case 1: console.log("Suma");
//       alert(`LA SUMA ES: ${suma(n1,n2)}`)
//       break;
//
//     case 2: console.log("Resta");
//       res = n1 - n2;
//       alert(`LA RESTA ES: ${res}`);
//       break;
//     case 3: console.log("Raiz de N1");
//       ra = Math.sqrt(n1);
//       alert(`LA SUMA ES: ${ra}`);
//       break;
//
//     case 4:
//       estado = false;
//       break;
//
//     default: alert("Opcion no existe");
//
//   }
//
//
// }
//
//
// function suma(n1,n2){
//
//   return n1+n2;
//
// }



// let kelvin, celsius, fahrenheit;
// let opcion;
// const v1 = 273.15;
// const v2 =9;
// const v3 = 32;
// const v4 = 5;
//
// do {
//
//   opcion = parseInt(prompt("***** ESCOGE LA OPCIÓN QUE NECESITAS*****\n\n1. Kelvin a Celsius \n 2. Kelvin  a Fahrenheit \n 3. Fahrenheit a Celsius \n 4. Fahrenheit a Kelvin \n 5. Celsius a Kelvin \n 6. Celsius a Fahrenheit \n 7. Salir "));
//
//   switch (opcion)
//   {
//     case 1:
//       alert("Transformar:  De Kelvin a Celsius");
//       kelvin = parseFloat(prompt("Ingresa el valor en Kelvin"));
//       celsius = kelvin - v1
//       alert("EL VALOR EN CELSIUS ES : " + celsius);
//       break;
//
//     case 2:
//       alert("Transformar:  De Kelvin  a Fahrenheit");
//       celsius = parseFloat(prompt("Ingresa el valor en Celsius"));
//       fahrenheit = ((v2/v4) * celsius) + v3;
//       alert("EL VALOR EN FAHRENHEIT ES : " + fahrenheit);
//       break;
//
//     case 3:
//       alert("Transformar:  De Fahrenheit a Celsius");
//       fahrenheit = parseFloat(prompt("Ingresa el valor en Fahrenheit"));
//       celsius = (v4/v2) * (fahrenheit - 32);
//       alert("EL VALOR EN CELCIUS ES : " + celsius);
//       break;
//
//     case 4:
//       alert("Transformar:  De Fahrenheit a Kelvin");
//       fahrenheit = parseFloat(prompt("Ingresa el valor en Fahrenheit"));
//       kelvin = ((fahrenheit - v3) * v4 / v2) + v1;
//       alert("EL VALOR EN KELVIN ES : " + kelvin);
//       break;
//
//     case 5:
//       alert("Transformar:  De Celsius a Kelvin");
//       celsius = parseFloat(prompt("Ingresa el valor en Celsius"));
//       kelvin = celsius + v1;
//       alert("EL VALOR EN KELVIN ES : " + kelvin);
//       break;
//
//     case 6:
//       alert("Transformar:  De Celsius a Fahrenheit ");
//       celsius = parseFloat(prompt("Ingresa el valor en Celsius"));
//       fahrenheit = (celsius * v2 / v4) + v3;
//       alert("EL VALOR EN FAHRENHEIT ES : " + fahrenheit);
//       break;
//
//     case 7:
//       alert("Salir del menú");
//       break;
//
//     default:
//       alert("Opción no válida. Por favor, elige una opción del 1 al 7.");
//       break;
//   }
// } while (opcion !== 7);
//


// let linea = '*'
// let numeroEntero = parseInt(prompt("Ingresa el número entero"))
//
// for (let i = 1; i <= numeroEntero; i++)
// {
//   linea += '*'
//   console.log(linea)
//
// }

//****************************************************************************************************

// let clave = "pao2102";
// let intentos = 2;
//
// while(intentos > 0)
// {
//   let contraseña = prompt("Ingresa tu contraseña: ");
//   if(contraseña === clave)
//   {
//     alert("Acceso concedido");
//     break;
//   }
//   else(contraseña !== clave)
//   {
//     intentos--;
//     let contadorMensaje = intentos+1;
//     alert("Acceso denegado \n Te quedan: " + contadorMensaje + " " + " intentos");
//     if (intentos <= 0)
//     {
//       alert("ALERTA! un intruso esta tratando de ingresar");
//     }
//   }
// }


//****************************************************************************************************

// let letra;
// let letraRepetida = "";
// let repeticiones;
//
// letra = prompt("Ingresa una letra Z O X: ").toUpperCase();
//
// if(letra == 'Z' || letra == 'X')
// {
//   repeticiones = prompt("Ingresa el número de repeticiones entre 1 y 15: ");
//   do {
//     repeticiones--;
//     letraRepetida = letraRepetida + letra;
//   }
//   while (repeticiones > 0);
//
//   alert(letraRepetida);
// }
// else
// {
//   alert("Opcion inválida");
// }
//
// //********************************************FUNCIONES**********************************************
//
//
// // Ejemplo 1
//
// //saludar("Pedro");
//
// function saludar(nombre){
//   alert(`Hola ${nombre}`);
// }
//
//
// // Ejemplo 2
//
// console.log(raiz(18));
//
// function raiz(numero){
//
//   return Math.sqrt(numero);
//
// }
// // Ejemplo 3
//
// function exponente(base, cuadrado){
//
//
//   return Math.pow(base, cuadrado);
//
//
// }
//
// console.log(`EL CUADRADO ES: ${exponente(12, 6)}`);


//********************************************FUNCIONES EJERCICIO OPERACIONES MATEMATICAS**********************************************

// let opcion;
// let estado = true;
//
// function suma(n1, n2) {
//   return n1 + n2;
// }
//
// function resta(n1, n2) {
//   return n1 - n2;
// }
//
// function raiz(n1) {
//   return Math.sqrt(n1);
// }
//
// // Solicitar primero el menú
// while (estado) {
//   opcion = parseInt(prompt(`1. Suma \n 2. Resta \n 3. Raiz \n 4. Salir`));
//
//   // Condición para salir del bucle en caso de que el usuario quiera salir.
//   if (opcion === 4) {
//     estado = false;
//     alert("Saliendo del programa.");
//     break; // Opción para salir
//   }
//
//   // Solicitar los valores una vez que se elige una operación
//   let n1 = parseInt(prompt(`Ingrese el primer valor`));
//   let n2 = parseInt(prompt(`Ingrese el segundo valor`));
//
//   switch (opcion) {
//     case 1:
//       console.log("Suma");
//       alert(`LA SUMA ES: ${suma(n1, n2)}`);
//       break;
//
//     case 2:
//       console.log("Resta");
//       alert(`LA RESTA ES: ${resta(n1, n2)}`);
//       break;
//
//     case 3:
//       console.log("Raiz de N1");
//       alert(`LA RAÍZ DE N1 ES: ${raiz(n1)}`);
//       break;
//
//     default:
//       alert("Opción no existe");
//       break;
//   }
// }


//******************************************** FUNCIONES ***** EJERCICIO OPERACIONES TRANSFORMAR GRADOS **********************************************

//
// let kelvin, celsius, fahrenheit;
// let opcion;
// const v1 = 273.15;
// const v2 =9;
// const v3 = 32;
// const v4 = 5;
//
// function kelvinCelsius(kelvin)
// {
//   return kelvin - v1;
// }
//
// function KelvinFahrenheit(celsius)
// {
//   return ((v2/v4) * celsius) + v3;
// }
//
// function FahrenheitCelsius(celsius)
// {
//   return (v4/v2) * (fahrenheit - 32);
// }
//
// function FahrenheitKelvin(fahrenheit)
// {
//   return ((fahrenheit - v3) * v4 / v2) + v1;
// }
//
// function CelsiusKelvin(kelvin)
// {
//   return  celsius + v1;
// }
//
// function CelsiusFahrenheit(fahrenheit)
// {
//   return  (celsius * v2 / v4) + v3;
// }
//
//
// do {
//
//
//
//   opcion = parseInt(prompt("***** ESCOGE LA OPCIÓN QUE NECESITAS*****\n\n1. Kelvin a Celsius \n 2. Kelvin  a Fahrenheit \n 3. Fahrenheit a Celsius \n 4. Fahrenheit a Kelvin \n 5. Celsius a Kelvin \n 6. Celsius a Fahrenheit \n 7. Salir "));
//
//   switch (opcion)
//   {
//     case 1:
//       alert("Transformar:  De Kelvin a Celsius");
//       kelvin = parseFloat(prompt("Ingresa el valor en Kelvin"));
//       alert("EL VALOR EN CELSIUS ES : " + kelvinCelsius(kelvin));
//       break;
//
//     case 2:
//       alert("Transformar:  De Kelvin  a Fahrenheit");
//       celsius = parseFloat(prompt("Ingresa el valor en Celsius"));
//       alert("EL VALOR EN FAHRENHEIT ES : " + KelvinFahrenheit(celsius));
//       break;
//
//     case 3:
//       alert("Transformar:  De Fahrenheit a Celsius");
//       fahrenheit = parseFloat(prompt("Ingresa el valor en Fahrenheit"));
//       alert("EL VALOR EN CELCIUS ES : " + FahrenheitCelsius(celsius));
//       break;
//
//     case 4:
//       alert("Transformar:  De Fahrenheit a Kelvin");
//       fahrenheit = parseFloat(prompt("Ingresa el valor en Fahrenheit"));
//       alert("EL VALOR EN KELVIN ES : " + FahrenheitKelvin(fahrenheit));
//       break;
//
//     case 5:
//       alert("Transformar:  De Celsius a Kelvin");
//       celsius = parseFloat(prompt("Ingresa el valor en Celsius"));
//       alert("EL VALOR EN KELVIN ES : " + CelsiusKelvin(kelvin));
//       break;
//
//     case 6:
//       alert("Transformar:  De Celsius a Fahrenheit ");
//       celsius = parseFloat(prompt("Ingresa el valor en Celsius"));
//       alert("EL VALOR EN FAHRENHEIT ES : " + CelsiusFahrenheit(fahrenheit));
//       break;
//
//     case 7:
//       alert("Salir del menú");
//       break;
//
//     default:
//       alert("Opción no válida. Por favor, elige una opción del 1 al 7.");
//       break;
//   }
// } while (opcion !== 7);


//******************************************** ARREGLOS **********************************************


let estudiantes = ["Laura", "Julian", "Andres", "Oscar", "Paola"];

console.log(estudiantes)

// Añadir un elemento al final

console.log(estudiantes.push("Ricardo"));

console.log(estudiantes)

// Agrego elementos al inicio

console.log(estudiantes.unshift("Esmeralda"));

console.log(estudiantes)

// Añadir elementos en alguna posicion

console.log(estudiantes.splice(2 , 0  , "Sofia"));

console.log(estudiantes.splice(2, 1));
// Eliminar ultimo

console.log(estudiantes.pop());

console.log(estudiantes)


// Eliminar el primer elemento

console.log(estudiantes.shift());

console.log(estudiantes)

// Posicion de un elemento

console.log(estudiantes.indexOf("Andres"));

console.log(estudiantes)
// Recorrer el arreglos

// op 1 est iterador

estudiantes.forEach((est) =>{

  console.log(est);

});

let vector = [];

vector[0] = 15;
vector[1] = 63;
vector[2] = 48;


console.log(vector)

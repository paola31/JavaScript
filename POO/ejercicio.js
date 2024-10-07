// class Producto{
//
//     constructor(nombre,precio,cantidad){
//
//         this._nombre = nombre;
//         this._precio = precio;
//         this._cantidad = cantidad
//     }
//
//
//     get nombre(){
//         return this._nombre;
//     }
//
//     set nombre(nombre){
//         this._nombre = nombre;
//     }
//
//     get precio(){
//         return this._precio;
//     }
//
//     set precio(precio){
//         this._precio = precio;
//     }
//
//     get cantidad(){
//         return this._cantidad;
//     }
//     set cantidad(cantidad){
//         this._cantidad = cantidad;
//     }
//
//
//     mostrarNombreProducto(){
//         console.log(`El nombre del producto es: ${this._nombre}, el precio es: ${this._precio} y la cantidad es: ${this._cantidad}`);
//     }
//
//
//     valorTotal(){
//
//         return this._precio * this._cantidad;
//     }
//
//
//     modificarCantidad(nuevoCantidad){
//
//         this._cantidad = nuevoCantidad;
//
//         console.log(`La nueva cantidad es: ${this._cantidad}`)
//
//     }
//     anadirStock(nuevoCantidad){
//
//         return this._cantidad += nuevoCantidad;
//     }
//
//     venderStock(nuevoCantidad){
//         this._cantidad -= nuevoCantidad;
//     }
//
//
//     operacion(){
//
//         let nCantidad = parseFloat(prompt('Ingrese la nueva cantidad'));
//
//         let op = parseInt(prompt("Ingrese que tipo de operacion desea realizar 1. Añadir 2. Restar"));
//
//         if(op===1){
//             console.log(prod3.anadirStock(nCantidad));
//
//         }else{
//
//             console.log(prod3.venderSt
//         }else{
//
//             console.log(prod3.venderStock(nCantidad));
//         }
//     }
//
//
//     static crearProducto(){
//         let productos;
//         let precios;
//         let cantidades;
//         do{
//             productos = prompt('Ingrese el nombre del producto');
//         }while();
//
//         precios = parseFloat(prompt('Ingrese el precio del producto'));
//
//         cantidades = parseFloat(prompt('Ingrese la cantidad del producto'));
//
//         return new Producto(productos, precios, cantidades);
//     }
//
//
//
// }
//
// const prod1 = new Producto("Mouse", 45000, 5);
// const prod2 = new Producto("Monitor", 1450000, 3);
//
//
// const prod3 = Producto.crearProducto();
//
//
// prod1.mostrarNombreProducto();
// prod2.mostrarNombreProducto();
// prod3.mostrarNombreProducto();
//
// console.log(` El valor del producto 1 es: ${prod1.valorTotal()}`);
// console.log(` El valor del producto 2 es: ${prod2.valorTotal()}`);
// console.log(` El valor del producto 3 es: ${prod3.valorTotal()}`);
// prod3.operacion();
//
//
// prod1.modificarCantidad(8);
// prod2.modificarCantidad(6);
// //prod3.modificarCantidad(nCantidad);
//
//
// prod1.mostrarNombreProducto();
// prod2.mostrarNombreProducto();
// prod3.mostrarNombreProducto();
//
// console.log(` El valor del producto 1 es: ${prod1.valorTotal()}`);
// console.log(` El valor del producto 2 es: ${prod2.valorTotal()}`);
// console.log(` El valor del producto 3 es: ${prod3.valorTotal()}`);


// class Termostato {
//     constructor(temperatura, estado) {
//         this._temperatura = Math.floor(Math.random() * (30 - 15 + 1)) + 15;;
//         this._estado = estado;
//     }
//
//     get temperatura() {
//         return this._temperatura;
//     }
//
//     set temperatura(temperatura) {
//         this._temperatura = temperatura;
//     }
//
//     subirTemperatura(grados) {
//         if (this._estado === 'encendido') {
//             this._temperatura += grados;
//             alert(`La temperatura subió a ${this._temperatura}°C (subió ${grados}°C)`);
//         } else {
//             alert('El termostato está apagado');
//         }
//     }
//
//     bajarTemperatura(grados) {
//         if (this._estado === 'encendido') {
//             this._temperatura -= grados;
//             alert(`La temperatura bajó a ${this._temperatura}°C (bajó ${grados}°C)`);
//         } else {
//             alert('El termostato está apagado');
//         }
//     }
//
//     apagar() {
//         this._estado = 'apagado';
//         alert('El termostato ha sido apagado.');
//     }
// }
//
// const termoestato1 = new Termostato(20, 'encendido');
//
// let opcion;
// do {
//     opcion = prompt('***** Elige una opción ***** \n1. Subir temperatura \n2. Bajar temperatura \n3. Apagar termostato \n4. Mostrar temperatura actual \n5. Salir');
//
//     switch (opcion) {
//         case '1':
//             let gradosSubir = parseInt(prompt("¿Cuántos grados deseas subir?"));
//             if (!isNaN(gradosSubir) && gradosSubir > 0) {
//                 termoestato1.subirTemperatura(gradosSubir);
//             } else {
//                 alert("Por favor, ingresa un número válido mayor que cero.");
//             }
//             break;
//         case '2':
//             let gradosBajar = parseInt(prompt("¿Cuántos grados deseas bajar?"));
//             if (!isNaN(gradosBajar) && gradosBajar > 0) {
//                 termoestato1.bajarTemperatura(gradosBajar);
//             } else {
//                 alert("Por favor, ingresa un número válido mayor que cero.");
//             }
//             break;
//         case '3':
//             termoestato1.apagar();
//             break;
//         case '4':
//             alert(`La temperatura actual es: ${termoestato1.temperatura}°C`);
//             break;
//         case '5':
//             alert('Saliendo...');
//             break;
//         default:
//             alert('Opción no válida. Por favor, elige una opción del 1 al 5.');
//     }
// } while (opcion !== '5');
//
//


class Clase {
    constructor() {
        this._cuentas = new Array(5); // Array para almacenar las cuentas de usuarios
        this._saldos = new Array(5);  // Array para almacenar los saldos de las cuentas
    }

    setCuenta(index, cuenta) {
        this._cuentas[index] = cuenta;
    }

    getCuenta(index) {
        return this._cuentas[index];
    }

    setSaldo(index, saldo) {
        this._saldos[index] = saldo; // Corregido
    }

    getSaldo(index) {
        return this._saldos[index];
    }

    crearCuenta() {
        for (let i = 0; i < this._cuentas.length; i++) {
            let cuenta = prompt("Ingrese el nuevo número de cuenta " + (i + 1) + ":");
            let saldo = parseFloat(prompt("Ingrese el saldo para la nueva cuenta " + cuenta + ":"));

            this.setCuenta(i, cuenta); // Almacena la cuenta
            this.setSaldo(i, saldo);   // Almacena el saldo
            alert(`Cuenta ${cuenta} creada con un saldo de ${saldo} €.`);
        }
    }

    consultarSaldo() {
        let cuenta = prompt("Ingrese el número de cuenta a consultar: ");
        let index = this._cuentas.indexOf(cuenta); // Busca el índice de la cuenta

        if (index !== -1) {
            alert("El saldo de la cuenta " + cuenta + " es de: " + this.getSaldo(index) + " €.");
        } else {
            alert("Esa cuenta no existe.");
        }
    }
}

const cuenta = new Clase(); // Crear una instancia de la clase

let opcion;
do {
    opcion = parseInt(prompt('***** MENU CAJERO BANCAYO\n1. Crear cuentas \n2. Consultar cuentas \n3. Salir'));

    switch (opcion) {
        case 1:
            cuenta.crearCuenta();
            break;
        case 2:
            cuenta.consultarSaldo();
            break;
        case 3:
            alert('Saliendo...');
            break;
        default:
            alert('Opción no válida, intente nuevamente.');
    }
} while (opcion !== 3);




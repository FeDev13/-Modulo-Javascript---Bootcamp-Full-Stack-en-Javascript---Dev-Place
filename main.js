/*ejercicio 1*/

let precioProducto = parseInt(prompt("ingrese el precio"));
let ivaDelProducto = precioProducto * 0.21;

alert("el precio final es " + (precioProducto + ivaDelProducto) / 100);

/* ejercicio 2
En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. 
Si un usuario paga  4 créditos puede acceder a 
todas, si apga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala. */

let creditos = parseInt(prompt("ingrese numero de creditos"));

switch (creditos) {
  case 4:
    alert("podes acceder a Consolas, Juegos 2D, Juegos 3D, Realidad Virtual");
    break;
  case 3:
    alert("podes acceder a Consolas, Juegos 2D, Juegos 3D");
    break;
  case 2:
    alert("podes acceder a Consolas, Juegos 2D");
    break;
  case 1:
    alert("podes acceder a Consolas");
    break;
  default:
    alert("no ingresaste creditos");
    break;
}
/*ejercicio 3*
En una tienda coches se quiere redirigir a un cliente a una sección de acuerdo al tipo de coche que elija. 
Si elige tipo gasolina o 1 se le enviará a la oficina numero 100. 
Si elije el tipo diesel o 2 irá a la oficia 200 y si elige electrico o 3 se le enviará a la ofician 300.
/*/

let tipoDeCoche = parseInt(prompt("elija el tipo de coche"));

switch (tipoDeCoche) {
  case 1:
    alert("ingrese a la oficina 100");
    break;
  case 2:
    alert("ingrese a la oficina 200");
  case 3:
    alert("ingrese a la oficina 300");
  default:
    alert("no ha elegido su tipo de coche o el numero es incorrecto");
    break;
}

/* ejercicio 4
Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 400 euros le descuenta un 10%
Si la compra supera los 400 euros le descuenta un 15% */

let compra = parseFloat(prompt("ingrese el monto de compra"));

if (compra < 100) {
  console.log(compra);
} else if (compra >= 100 && compra <= 300) {
  console.log(compra - compra * 0.05);
} else if (compra > 300 && compra <= 400) {
  console.log(compra - compra * 0.1);
} else {
  console.log(compra - compra * 0.15);
}

/* ejercicio 5
Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. 
Los números se separarán por comas. */

let valorEntero = parseInt(prompt("ingrese un valor entero"));
let arrayVacioDeNumeros = [];

for (let i = 0; i < valorEntero; i++) {
  arrayVacioDeNumeros.push(i);
}
console.log(arrayVacioDeNumeros);

/* ejercicio 6
En este ejercicio mezclamos bucles on condicionales: 
el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.
.Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0.
 */
let ingresoDeNumero = parseInt(prompt("ingrese un numero"));

let num = "";

for (var i = ingresoDeNumero; i > 0; i--) {
  if (i % 3 == 2) {
    num += i + ", ";
  } else {
  }
}

console.log(num);

/*ejercicio 7

Programa un script que pida al usuario que teclee 4 números (uno cada vez). 
Con esos números el programa deberá calcular la media aritmética. 
O sea la suma de los 4 números dividida entre 4*/

let num1 = parseInt(prompt("ingrese primer numero"));
let num2 = parseInt(prompt("ingrese segundo numero"));
let num3 = parseInt(prompt("ingrese tercer numero"));
let num4 = parseInt(prompt("ingrese cuarto numero"));

let promedio = (num1 + num2 + num3 + num4) / 4;

alert("la media aritmetica es " + promedio);

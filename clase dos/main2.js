/* let agenda = [];

function agregarContacto(dni, nombre, apellido, telefono) {
  //funcion que toma como parametros los mostrados
  let nuevoContacto = [dni, nombre, apellido, telefono]; //array que tiene los parametros pasados

  agenda.push(nuevoContacto); //se agrega el array nuevo al array vacio agenda
}

let crearContacto = () => {
  //funcion que es llamada por la funcion entrada
  let dni = prompt("ingrese su dni");
  let nombre = prompt("ingrese su nombre");
  let apellido = prompt("ingrese su apellido");
  let telefono = prompt("ingrese su numero de telefono");

  agregarContacto(dni, nombre, apellido, telefono);
};

let eliminarPorDni = () => {};

let entrada = () => {
  let opcion;
  while (opcion != 0) {
    opcion = prompt("crear contacto:1\nEliminar por DNI: 3");
    switch (op) {
      case "1":
        crearContacto();
        break;
      case "2":
        eliminarPorDni();

      default:
        break;
    }
  }
};
 */

const obj = {
  valor1: 1,
  valor2: 2,
  valor3: 3,
  valor4: 4,
  valor4: 5,
};

let sum = 0;

for (const value of Object.values(obj)) {
  sum += value;
}
console.log(sum);

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}
console.log(newArr);

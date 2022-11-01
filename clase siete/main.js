/* 1 - Supongamos que un banco ofrece distintos productos a sus clientes (CuentaCorriente, CajaAhorro, SeguroDeVida, SeguroHogar). 
 Realizar el método Object. assign(), utilizando el patrón de diseño Prototype, para realizar la copia de cualquiera de estos productos. */

/* 2 - Supongamos que vamos a crear una oficina para una empresa determinada y estamos seguros que solo compraremos esa sola. 
 La oficina tendrá un nombre y una cantidad fija de empleados. 
 Si intento crear una segunda oficina me debería devolver la primera instancia creada. 
 Aplicar el patron de diseño Singleton y explicar que principio SOLID es contrario a este patrón de diseño. */

class Oficina {
  constructor(nombre, empleados) {
    if (Oficina.instancia) {
      console.log("existe");
      return Oficina.instancia;
    }

    this.nombre = nombre;
    this.empleados = empleados;
    Oficina.instancia = this;
  }
}

const a = new Oficina("a");
const b = new Oficina("b");

/* Supongamos que tienes una Pizzeria y que tus Pizzas pueden o no tener queso, tomate, masa fina y ananá. 
Cada pizza es customizable y se adapta segun esos parametros a lo que pide el cliente. 
Crear una clase pizza y un método diferente por cada argumento que necesitamos pasarle al constructor devolviendo this en cada uno de ellos.  
Instanciar todos los valores por defecto que querra nuestro cliente de los ingredientes de nuestra pizza. 
Utilizar el metodo build para crear una nueva instancia de pizza. Aplicar el patron de diseño builder. 
Realizar este mismo ejercicio sin aplicar el patron de diseño builder. ¿
Que pasa si solo quiero llamar a los métodos queso y tomate? Supongamos que un cliente pide solo ese tipo de pizza. */

class Pizza {
  constructor() {
    this.queso = false;
    this.tomate = false;
    this.masafina = false;
    this.anana = 0;
  }
  setQueso() {
    this.queso = true;
    return this;
  }
  setTomate() {
    this.tomate = true;
    return this;
  }
  setMasafina() {
    this.masafina = true;
    return this;
  }
  setAnana(cantidad) {
    this.anana = cantidad;
    return this;
  }

  builder() {
    return {
      queso: this.queso,
      tomate: this.tomate,
      masafina: this.masafina,
      anana: this.anana,
    };
  }
}

const pizza2 = new Pizza().setTomate().setQueso().builder();
console.log(pizza2);

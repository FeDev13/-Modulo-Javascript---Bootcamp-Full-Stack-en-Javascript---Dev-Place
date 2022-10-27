class Persona {
  nombre;
  edad;
  dni;
  constructor() {}

  getNombre() {
    return this.dni;
  }
  getEdad() {
    return this.edad;
  }
  getDni() {
    return this.dni;
  }
  setNombre() {
    this.nombre = nombre;
  }
  setEdad() {
    this.edad = edad;
  }
  getDni() {
    this.dni = dni;
  }

  mostrar() {
    this.nombre + " " + this.edad + " " + this.dni;
  }
  esMayorDeEdad() {
    return this.edad > 18;
  }
}

class Cuenta {
  titular;
  cantidad;

  constructor() {}

  getTitular() {
    return this.titular;
  }
  getCantidad() {
    return this.cantidad;
  }

  setTitular() {
    this.titular = titular;
  }
  setCantidad() {
    this.cantidad = cantidad;
  }

  ingresar() {
    if (cantidad > 0) {
      this.cantidad += cantidad;
    }
  }
  retirar() {
    this.cantidad - cantidad;
  }
}

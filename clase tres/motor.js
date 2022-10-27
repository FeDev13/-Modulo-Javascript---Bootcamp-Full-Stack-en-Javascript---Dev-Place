class Motor {
  apagado;

  constructor(apagado) {
    this.apagado = true;
  }

  arrancar() {
    return (this.apagado = true);
  }
  apagar() {
    return (this.apagado = true);
  }
}

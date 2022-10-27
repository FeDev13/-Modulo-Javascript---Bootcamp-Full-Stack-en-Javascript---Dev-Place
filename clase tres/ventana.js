class Ventana {
  manual;
  electrica;
  cerrada;

  constructor(manual, electrica, cerrada) {
    this.manual;
    this.electrica;
    this.cerrada = true;
  }
  abrir() {
    return (this.cerrada = false);
  }
  cerrar() {
    return (this.cerrada = true);
  }
}

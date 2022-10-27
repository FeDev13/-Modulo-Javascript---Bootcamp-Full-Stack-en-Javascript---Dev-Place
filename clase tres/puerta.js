class Puerta {
  estado;
  ventana;

  constructor(estado, ventana) {
    this.estado = false;
    this.ventana = new Ventana();
  }
  abrir() {
    return (this.estado = false);
  }
}

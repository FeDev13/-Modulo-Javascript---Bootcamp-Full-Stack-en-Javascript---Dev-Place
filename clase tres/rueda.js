class Rueda {
  material;
  rodado;
  inflada;

  constructor(material, rodado, inflada) {
    this.material;
    this.rodado;
    this.inflada = true;
  }

  inflar() {
    return (this.inflada = true);
  }

  desinflar() {
    return (this.inflada = false);
  }
}

class Coche {
  motor;
  puerta1;
  puerta2;
  rueda1;
  rueda2;
  rueda3;
  rueda4;

  constructor() {
    this.motor = new Motor();
    this.puerta1 = new Puerta();
    this.puerta2 = new Puerta();
    this.rueda1 = new Rueda();
    this.rueda2 = new Rueda();
    this.rueda3 = new Rueda();
    this.rueda4 = new Rueda();
  }
}

let auto = new Coche();

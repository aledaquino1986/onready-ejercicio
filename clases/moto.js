import Vehiculo from "./vehiculo.js";

class Moto extends Vehiculo {
  constructor(marca, modelo, precio, cilindrada) {
    super(marca, modelo, precio);
    this.cilindrada = cilindrada;
  }
}

export default Moto;

import Vehiculo from "./vehiculo.js";

class Automovil extends Vehiculo {
  constructor(marca, modelo, precio, puertas) {
    super(marca, modelo, precio);
    this.puertas = puertas;
  }
}

export default Automovil;

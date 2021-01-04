import Vehiculo from "./vehiculo.js";

class Automovil extends Vehiculo {
  constructor(marca, modelo, precio, puertas) {
    super(marca, modelo, precio);
    this.puertas = puertas;
  }

  describirAutomovil() {
    console.log(
      `Marca: ${this.marca} // Modelo: ${
        this.modelo
      } // ${`Puertas: ${this.puertas}`} // Precio: $${toThousand(
        this.precio.toFixed(2)
      )}`
    );
  }
}

export default Automovil;

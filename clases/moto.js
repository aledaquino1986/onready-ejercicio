import Vehiculo from "./vehiculo.js";

class Moto extends Vehiculo {
  constructor(marca, modelo, precio, cilindrada) {
    super(marca, modelo, precio);
    this.cilindrada = cilindrada;
  }

  describirMoto() {
    console.log(
      `Marca: ${this.marca} // Modelo: ${
        this.modelo
      } // ${`Cilindradas: ${this.cilindrada}`} // Precio: $${toThousand(
        this.precio.toFixed(2)
      )}`
    );
  }
}

export default Moto;

(function () {
  const toThousand = n => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  class Vehiculo {
    constructor(marca, modelo, precio) {
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
    }
  }

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

  class VehiculosEnLista {
    static crearLista(...vehiculos) {
      const lista = [...vehiculos];
      return lista;
    }

    static vehiculosEnVenta() {
      const moto1 = new Moto("Honda", "Titan", 60000, "125cc");
      const auto1 = new Automovil("Peugeot", "206", 200000, 4);
      const moto2 = new Moto("Yamaha", "YBR", 80500, "160cc");
      const auto2 = new Automovil("Peugeot", "208", 250000, 5);
      return this.crearLista(auto1, moto1, auto2, moto2);
    }

    static mostrarListadoDeVehiculos(listaDeVehiculos) {
      listaDeVehiculos.map(vehiculos => {
        const { marca, modelo, precio, cilindrada, puertas } = vehiculos;

        console.log(
          `Marca: ${marca} // Modelo: ${modelo} // ${
            puertas ? `Puertas: ${puertas}` : `Cilindradas: ${cilindrada}`
          } // Precio: $${toThousand(precio.toFixed(2))}`
        );
      });
    }

    static vehiculoMasCaro(listadoDeVehiculos) {
      const vehiculoMasCaro = listadoDeVehiculos.reduce((precio1, precio2) =>
        precio1.precio > precio2.precio ? precio1 : precio2
      );

      console.log(
        `Vehiculo más caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}`
      );
    }

    static vehiculoMasBarato(listadoDeVehiculos) {
      const vehiculoMasBarato = listadoDeVehiculos.reduce((precio1, precio2) =>
        precio1.precio < precio2.precio ? precio1 : precio2
      );

      console.log(
        `Vehiculo más barato: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}`
      );
    }

    static vehiculoQueContieneY(listadoDeVehiculos) {
      const vehiculoConLetraY = listadoDeVehiculos.filter(vehiculos =>
        vehiculos.modelo.includes("Y")
      );

      const [vehiculoConY] = vehiculoConLetraY;

      console.log(
        `Vehículo que contiene en el modelo la letra ‘Y’ ${
          vehiculoConY.marca
        } ${vehiculoConY.modelo} $${toThousand(vehiculoConY.precio.toFixed(2))}`
      );
    }

    static vehiculosOrdenadosPorPrecio(listadoDeVehiculos) {
      const vehiculosOrdenados = listadoDeVehiculos.sort((a, b) => {
        return a.precio < b.precio ? 1 : -1;
      });

      console.log("Vehículos ordenados por precio de mayor a menor:");
      vehiculosOrdenados.map(vehiculo => {
        console.log(` ${vehiculo.marca} ${vehiculo.modelo}`);
      });
    }

    static mostrarInformacionEnPantalla() {
      const listaDeAutos = VehiculosEnLista.vehiculosEnVenta();
      VehiculosEnLista.mostrarListadoDeVehiculos(listaDeAutos);
      console.log("=============================");
      VehiculosEnLista.vehiculoMasCaro(listaDeAutos);
      VehiculosEnLista.vehiculoMasBarato(listaDeAutos);
      VehiculosEnLista.vehiculoQueContieneY(listaDeAutos);
      console.log("=============================");
      VehiculosEnLista.vehiculosOrdenadosPorPrecio(listaDeAutos);
    }
  }

  VehiculosEnLista.mostrarInformacionEnPantalla();
})();

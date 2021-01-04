import Moto from "./clases/moto.js";
import Automovil from "./clases/automovil.js";

(function () {
  const decimalComaMilPunto = numero => {
    return numero
      .toString()
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  class VehiculosEnLista {
    static crearListaDeVehiculos(...vehiculos) {
      const lista = [...vehiculos];
      return lista;
    }

    static crearVehiculosEnLista() {
      const HONDATITAN = new Moto("Honda", "Titan", 60000, "125cc");
      const PEUGEOT206 = new Automovil("Peugeot", "206", 200000, 4);
      const YAMAHAYBR = new Moto("Yamaha", "YBR", 80500, "160cc");
      const PEUGEOT208 = new Automovil("Peugeot", "208", 250000, 5);

      return this.crearListaDeVehiculos(
        PEUGEOT206,
        HONDATITAN,
        PEUGEOT208,
        YAMAHAYBR
      );
    }

    static mostrarListadoDeVehiculos(listaDeVehiculos) {
      listaDeVehiculos.map(vehiculos => {
        const { marca, modelo, precio, puertas, cilindrada } = vehiculos;

        console.log(
          `Marca: ${marca} // Modelo: ${modelo} // ${
            puertas ? `Puertas: ${puertas}` : `Cilindradas: ${cilindrada}`
          } // Precio: $${decimalComaMilPunto(precio.toFixed(2))}`
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
        } ${vehiculoConY.modelo} $${decimalComaMilPunto(
          vehiculoConY.precio.toFixed(2)
        )}`
      );
    }

    static vehiculosOrdenadosPorPrecio(listadoDeVehiculos) {
      const vehiculosOrdenados = listadoDeVehiculos.sort((a, b) => {
        return a.precio < b.precio ? 1 : -1;
      });

      console.log("Vehículos ordenados por precio de mayor a menor:");
      vehiculosOrdenados.map(vehiculo => {
        console.log(`${vehiculo.marca} ${vehiculo.modelo}`);
      });
    }

    static mostrarInformacionEnPantalla() {
      const listaDeAutosYMotos = VehiculosEnLista.crearVehiculosEnLista();
      VehiculosEnLista.mostrarListadoDeVehiculos(listaDeAutosYMotos);
      console.log("=============================");
      VehiculosEnLista.vehiculoMasCaro(listaDeAutosYMotos);
      VehiculosEnLista.vehiculoMasBarato(listaDeAutosYMotos);
      VehiculosEnLista.vehiculoQueContieneY(listaDeAutosYMotos);
      console.log("=============================");
      VehiculosEnLista.vehiculosOrdenadosPorPrecio(listaDeAutosYMotos);
    }
  }

  VehiculosEnLista.mostrarInformacionEnPantalla();
})();

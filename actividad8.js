class CajaFuerte {
  #codigo;   //propiedad privadaque solo se puede usar dentro de la clase

  constructor(propietario, codigoInicial) {
    this.propietario = propietario; // propiedad publica
    this.#codigo = codigoInicial; // propiedad privada
  }

  //metodo publico que devuelve el codigo secreto
  verCodigo() {
    return this.#codigo;
  }

  cambiarCodigo(nuevoCodigo) {
    //lo paso a texto para poder contar sus caracteres
    const texto = String(nuevoCodigo);

    if (texto.length !== 4) {
      console.error("Error: el código debe tener 4 dígitos.");
      return; //sale sin cambiar nada
    }

    for (let caracter of texto) {
      if (caracter < "0" || caracter > "9") {
        console.error("Error: el código solo puede tener números.");
        return;
      }
    }

    this.#codigo = nuevoCodigo;
    console.log("Código cambiado correctamente.");
  }
}

const miCaja = new CajaFuerte("Ana", 1234);

console.log(`Propietario: ${miCaja.propietario}`);
console.log(`Código actual: ${miCaja.verCodigo()}`);

miCaja.cambiarCodigo(5678);
console.log(`Código nuevo: ${miCaja.verCodigo()}`);

//probar fallos
miCaja.cambiarCodigo(12); //no tiene 4 digitos
miCaja.cambiarCodigo("12a4"); //tiene una letra
console.log(`Código tras los intentos fallidos: ${miCaja.verCodigo()}`);

//sin # es otra propiedad distinta que no existe asi que da undefined
console.log(`Acceso desde fuera (miCaja.codigo): ${miCaja.codigo}`); //undefined
//la unica forma de leer el codigo es con el metodo publico
console.log(`Acceso con verCodigo(): ${miCaja.verCodigo()}`); //5678

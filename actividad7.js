//clase padre
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} se está moviendo`);
  }
}

//clase hija
class Car extends Vehicle {
  constructor(name, model) {
    super(name);
    this.model = model;
  }

  //sobrescribo move()
  move() {
    console.log(`${this.name} se está moviendo`);
  }

  //metodo propio de Car
  info() {
    console.log(`Nombre: ${this.name}, Modelo: ${this.model}`);
  }
}

const miCoche = new Car("Seat", "Ateca");

miCoche.move();
miCoche.info();

//un Vehicle normal usa el mensaje genérico
const vehiculo = new Vehicle("Bicicleta");
vehiculo.move();

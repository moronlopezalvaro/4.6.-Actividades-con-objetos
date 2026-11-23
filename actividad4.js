function Car(name, model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
}

Car.prototype.mostrarInfo = function () {
  console.log(`${this.name} ${this.model} (${this.year})`);
};

//creo objetos con new
const coche1 = new Car("Kia", "XCeed", 2023);
const coche2 = new Car("Seat", "Ibiza", 2003);

console.log(coche1.name); //Kia
console.log(coche2.model); //Ibiza
console.log(coche1 instanceof Car); //true

//muestro sus datos con this
coche1.mostrarInfo();
coche2.mostrarInfo();
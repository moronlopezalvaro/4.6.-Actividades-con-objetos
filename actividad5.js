//creo la clave oculta con Symbol
const id = Symbol("id");

const empleado = {
  nombre: "Juan",
  puesto: "Carretillero",
};

empleado[id] = 123;

//recorro las propiedades
console.log("Recorrido con for...in:");
for (let clave in empleado) {
  console.log(`${clave}: ${empleado[clave]}`); //se salta la propiedad con clave Symbol
}

//con el simbolo se puede leer la propiedad
console.log(`Acceso directo con el símbolo: ${empleado[id]}`);

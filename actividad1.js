//creo el objeto
const persona = {
  nombre: "Paco",
  edad: 68,
  trabajo: "Conductor",
};

console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);

persona.pais = "España"; //añado una propiedad
delete persona.trabajo; //elimino una propiedad

console.log("Objeto modificado:", persona);
console.log(`Edad (con corchetes): ${persona["edad"]}`);

const usuario1 = {
  nombre: "Luis",
  edad: 30,
  email: "luis@correo.com",
};

const usuario2 = usuario1;

usuario2.edad = 31; //cambiamos usuario2
console.log("usuario1 tras cambiar usuario2:", usuario1); //usuario1 también cambia
console.log(`¿Son el mismo objeto? ${usuario1 === usuario2}`); //true

//uso como destino un objeto vacio y asi el clon es un objeto nuwvo
const clon = Object.assign({}, usuario1);
clon.nombre = "Marta"; // cambio solo el clon

console.log("Original (usuario1):", usuario1); //se sigue llamando luis
console.log("Clon:", clon); //se llama Marta
console.log(`¿Son el mismo objeto? ${usuario1 === clon}`); //false
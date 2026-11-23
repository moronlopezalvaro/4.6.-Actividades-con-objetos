const persona = {
  nombre: "Ana",
  edad: 28,
  pais: "España",
};

//recorre las claves y devuelve true si encuentra la que se busca
function existePropiedad(objeto, propiedadBuscada) {
  let encontrada = false;
  Object.keys(objeto).forEach((clave) => {
    if (clave === propiedadBuscada) {
      encontrada = true;
    }
  });
  return encontrada;
}

console.log(`¿Existe 'nombre'? ${existePropiedad(persona, "nombre")}`); // true
console.log(`¿Existe 'apellido'? ${existePropiedad(persona, "apellido")}`); // false

Object.entries(persona).forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});

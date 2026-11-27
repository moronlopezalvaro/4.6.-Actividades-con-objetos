# 4.6.-Actividades-con-objetos

Colección de actividades en JavaScript centradas en el uso y manejo de objetos, prototipos, símbolos, clases, herencia y encapsulación.

## Contenido

| Actividad             | Archivo                         | Descripción                                                                                                                                                                                                        |
| :-------------------- | :------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Actividad 1** | [actividad1.js](./actividad1.js) | Creación de un objeto literal (`persona`), acceso a propiedades con notación de punto y corchetes, adición de nuevas propiedades (`pais`) y eliminación con `delete` (`trabajo`).                       |
| **Actividad 2** | [actividad2.js](./actividad2.js) | Búsqueda de propiedades en un objeto con `Object.keys()` mediante la función `existePropiedad()` y recorrido de pares clave-valor con `Object.entries()`.                                                   |
| **Actividad 3** | [actividad3.js](./actividad3.js) | Diferencia entre copia por referencia (`usuario2 = usuario1`) y clonación superficial con `Object.assign({}, usuario1)`, comprobando la identidad de los objetos con `===`.                                  |
| **Actividad 4** | [actividad4.js](./actividad4.js) | Uso de funciones constructoras (`Car`), métodos en el prototipo (`Car.prototype.mostrarInfo`), instanciación con `new`, uso de `this` y verificación con `instanceof`.                                 |
| **Actividad 5** | [actividad5.js](./actividad5.js) | Creación de propiedades con claves `Symbol` (`Symbol("id")`) en un objeto (`empleado`), comprobando que `for...in` las ignora pero siguen siendo accesibles directamente mediante el símbolo.             |
| **Actividad 6** | [actividad6.js](./actividad6.js) | Sobrescritura del método `toString()` en el objeto `cuentaBancaria` utilizando `this.saldo` para personalizar su conversión a texto en `String()`, template literals y concatenación.                    |
| **Actividad 7** | [actividad7.js](./actividad7.js) | Herencia con clases ES6: clase base `Vehicle` y clase hija `Car` (`extends`, `super`), sobrescritura del método `move()` y definición del método propio `info()`.                                    |
| **Actividad 8** | [actividad8.js](./actividad8.js) | Encapsulación mediante propiedades privadas (`#codigo`) en la clase `CajaFuerte`, con métodos públicos de consulta (`verCodigo()`) y modificación validada a 4 dígitos numéricos (`cambiarCodigo()`). |
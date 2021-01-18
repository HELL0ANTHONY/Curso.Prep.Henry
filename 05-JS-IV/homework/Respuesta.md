# Respuesta

__Autor__: _Jorge Antonio Fernández_

----

__Objetos__: un objeto es similar a un array, pero en lugar de almacenar cosas que muchas veces no tienen que ver uno con el otro, como lo hacen los arrays, los objetos almacenan características que describen una cosa en particular. Como por el ejemplo, podríamos tener un objeto gato. Dentro de este objeto guardaríamos características que describen a este gato en particular, así como el nombre, la edad, el color del pelaje, etc.

__Propiedades__: las propiedades son las características que caracterizan a cada objeto. Si tomáramos a una persona como ejemplo sus propiedades serían "color del pelo, el nombre, el sexo, la altura, el peso, y un largo etc."

__Métodos__: los métodos son las acciones que pueden que pueden realizar cada objeto. Siguiendo con el ejemplo de las personas podríamos decir que sus métodos son *correr, saltar, reír, llorar, conducir, trabajar, etc, etc, etc.*

__Bucle__ `for... in`: el bucle `for in` es la manera que tenemos para iterar los objetos (iterar significa hacer una cosa varias veces). Como un objeto no tiene un índice numérico para poder iterar utilizamos sus propiedades para hacerlo.

__Notación de puntos vs notación de corchetes__: ambas notaciones son la manera que tenemos para acceder al valor de las propiedades de nuestro objeto. Por ejemplo, supongamos que quiero saber el nombre de un objeto persona entonces haría 

```javascript
let persona = {
	nombre: "Maria"
}
persona.nombre o persona["nombre"]
```

para saber cual es su nombre. Existen unas diferencia entre ellos como por ejemplo con las notación de corchetes podemos acceder a los valores de las propiedades que tienen espacios entre sus nombre como

```js
let persona = {
	nombre: "Maria",
	color favorito: "Rosa"
}
persona["color favorito"]; // "Rosa"
```

cosa que con la notación de puntos no podríamos hacer.
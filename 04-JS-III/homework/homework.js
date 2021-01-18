// Autor: Jorge Antonio Fernández
// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  for (let i = 0; i < array.length; i++)
    array[i] = array[i] + 1;
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  return palabras.join(" ");
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  for (let i = 0; i < array.length; i++)
    if (array[i] === elemento)
      return true;
  return false;
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  let sum = 0;
  for (let i = 0; i < numeros.length; i++)
    sum += numeros[i];
  return sum;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  let max = numeros[0];
  for (let i = 1; i < numeros.length; i++)
    if (numeros[i] > max)
      max = numeros[i];
  return max;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  if (arguments.length === 0) return 0;
  if (arguments.length === 1) return arguments[0];
  let producto = 1;
  for (let i = 0; i < arguments.length; i++)
    producto *= arguments[i];
  return producto;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  let contador = 0;
  for (let i = 0; i < arreglo.length; i++)
    if (arreglo[i] > 19)
      contador++;
  return contador;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  return (numeroDeDia === 1 || numeroDeDia === 7)
    ? "Es fin de semana"
    : "Es dia Laboral";
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  return (n.toString().charAt(0) === "9");
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  const esIgual = arreglo[0];
  for (let i = 1; i < arreglo.length; i++)
    if (arreglo[i] !== esIgual)
      return false;
  return true;
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  let eneroMarzoNoviembre = [];
  for (let i = 0, j = 0; i < array.length; i++)
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre")
      eneroMarzoNoviembre[j++] = array[i];
  return (eneroMarzoNoviembre.length === 3)
    ? eneroMarzoNoviembre
    : "No se encontraron los meses pedidos";
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  let mayoresACien = [];
  for (let i = 0, j = 0; i < array.length; i++)
    if (array[i] > 100)
      mayoresACien[j++] = array[i];
  return mayoresACien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  let masDos = [];
  for (let i = 0; i < 10; i++) {
    numero += 2;
    if (numero === i) break;
    masDos[i] = numero;
  }
  return (masDos.length < 10)
    ? "Se interrumpió la ejecución"
    : masDos;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  let nuevoArray = [];
  for (let i = 0; i < 10; i++) {
    if (i === 5)
      continue;
    else {
      numero += 2;
      nuevoArray.push(numero);
    }
  }
  return nuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  function entries() {
    return Object.entries(objeto);
  }
  return entries();
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  return string.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  function toFront(string) {
    const upper = string.split('').filter(character => character === character.toUpperCase()).join('');
    const lower = string.split('').filter(character => character === character.toLowerCase()).join('');
    return upper + lower;
  }
  return toFront(s);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  function reverseString() {
    return str.split(" ").map(word => word.split('').reverse().join('')).join(" ");
  }
  return reverseString();
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  function esCapicua() {
    const cadena = numero.toString();
    return cadena === cadena.split('').reverse().join('');
  }
  return (esCapicua()) ? "Es capicua" : "No es capicua";
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  /*   function noABC() {
      let nuevoString = "";
      for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena.charAt(i);
        if (caracter !== 'a' && caracter !== 'b' && caracter !== 'c')
          nuevoString += caracter;
      }
      return nuevoString;
    } */
  function noABC() {
    return cadena.split('')
      .filter(caracter => caracter !== 'a' && caracter !== 'b' && caracter !== 'c')
      .join("");
  }
  return noABC();
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  const nuevoArray = arr.sort((a, b) => a.length - b.length);
  return nuevoArray;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  function interseccion() {
    arreglo1.sort();
    arreglo2.sort();

    let i = 0;
    let j = 0;
    let elementosEnComun = [];

    while (i < arreglo1.length && j < arreglo2.length) {
      if (arreglo1[i] < arreglo2[j]) i++;
      else if (arreglo2[j] < arreglo1[i]) j++;
      else {
        elementosEnComun.push(arreglo1[i]);
        i++, j++;
      }
    }
    return elementosEnComun;
  }
  return interseccion();
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};


/*

// p Variable only exists inside the for loop

console.log("Antes: ", p);          // En este punto, p no está definida
for (let p = 0; p < 3; p++) {
  console.log("Valor de p: ", p);   // Aquí, p estará definida como 0, 1, 2
}
console.log("Después: ", p);        // En este punto, vuelve a no estar definida

*/

/*

console.log("Antes: ", p);          // En este punto, p vale undefined
for (var p = 0; p < 3; p++) {
  console.log("Valor de p: ", p);   // Aquí, p estará definida como 0, 1, 2
}
console.log("Después: ", p);        // Después: 3 (WTF!)

*/

/*

var a = 1;
console.log(a); // Aquí accedemos a la "a" global, que vale 1

function x() {
  console.log(a); // En esta línea el valor de "a" es undefined
  var a = 5; // Aquí creamos una variable "a" a nivel de función

  console.log(a); // Aquí el valor de "a" es 5 (a nivel de función)
  console.log(globalThis.a); // Aquí el valor de "a" es 1 (ámbito global)
}

x(); // Aquí se ejecuta el código de la función x()
console.log(a); // En esta línea el valor de "a" es 1


*/


var a = 1;
console.log(a); // Aquí accedemos a la "a" global, que vale 1

function x() {
  console.log(a); // En esta línea el valor de "a" es 1
  a = 5; // Aquí creamos una variable "a" en el ámbito anterior

  console.log(a); // Aquí el valor de "a" es 5 (a nivel de función)
  console.log(globalThis.a); // Aquí el valor de "a" es 5 (ámbito global)
}

x(); // Aquí se ejecuta el código de la función x()
console.log(a); // En esta línea el valor de "a" es 5


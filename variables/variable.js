        // Iniziating variables

/*
let a;
const b = 5;

console.log('a', a); //undefined variable
console.log('b', b); //5

*/

/*

  // Método 1: Declaración de variables de forma independiente

let a = 3;
let c = 1;
let d = 2;

*/

/*

  // Método 2: Declaración masiva de variables en el mismo let
let a = 3, c = 1, d = 2;

*/

/*

  // Método 3: Igual al anterior, pero mejorando la legibilidad del código
let a = 3,
    c = 1,
    d = 2;

*/


        // Reasignation of variables

/*

let a = 40;

a = 50;

console.log(a); //50

*/

        // Constant variables

/*

const name = "Sam";
console.log(name); //Sam

/* name = "Paco"; // Error: Assignment to constant variable. */

const MAX_ITERATIONS = 10;

for (let i = 0; i < MAX_ITERATIONS; i++) {
  console.log("Iteration", i);
}

console.log("Ended Bucle.");

// Math.random() prompt a value between 0 and 1 with 16 decimals.

console.log(Math.random(1)); //prompt a value between 0 and 1 with 16 decimals.

// Pretty often we need to obtain a random number between a & b.
// In order to do that, we need to do the following:

// Obtenemos un número al azar entre [0, 1) con 16 decimales
let x = Math.random();

// Multiplicamos dicho número por el valor máximo que buscamos (5)
x = x * 5;

// Redondeamos inferiormente, quedándonos sólo con la parte entera
console.log(x = Math.floor(x));

// Random number between 0 and 5 (5 not included)
const i = Math.floor(Math.random() * 5);
const j = 4.12341123423; // Number with decimals, in order to test Math.floor

console.log(Math.floor(j));
console.log(~~(j));
console.log("///")
console.log("The random number generated between 0 and 5 is", i);

/*

Conclusion:
Performance: ~~(j) is faster, especially in tight loops or
performance-critical code.
Accuracy: Math.floor(j) provides more accurate flooring for all numbers,
particularly negative ones.

*/

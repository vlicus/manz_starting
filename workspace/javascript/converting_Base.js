//Convertion from another base

// Base binaria: 0, 1 (Base 2)
// Base octal: 0, 1, 2, 3, 4, 5, 6, 7 (Base 8)
// Base decimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (Base 10)
// Base hexadecimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F (Base 16)

// Habrás observado que tanto .parseInt() como .parseFloat() tienen un
// segundo parámetro  radix. Este parámetro sirve para indicar la base
// numérica desde la que procede el número del . Por defecto,
// cuando se omite este parámetro, se asume que la base es 10 (base decimal),
// pero indicando este parámetro podemos cambiar la base.

Number.parseInt("11101", 2)
console.log(Number.parseInt("11101", 2));    // 11101 en binario, es 29 en decimal
Number.parseInt("31", 8)
console.log(Number.parseInt("31", 8));       // 31 en octal, es 25 en decimal
Number.parseInt("FF", 16)
console.log(Number.parseInt("FF", 16));      // FF en hexadecimal, es 255 en decimal

// Otra forma de hacerlo es con el prefijo de la base numérica:
// 0b para binario, 0o para octal y 0x para hexadecimal.

0b11101; // 29
console.log(0b11101);    // 29
0o31;    // 25
console.log(0o31);       // 25
0xFF;    // 255
console.log(0xFF);       // 255

// Desde forma decimal a otra base:

// toString() es un método que nos permite convertir la base de un número
// decimal a otra base numérica.

(16).toString();        // "16"     (lo convierte a string)
console.log((16).toString());        // "16"
(42.5).toString();      // "42.5"   (lo convierte a string)
console.log((42.5).toString());      // "42.5"
(26).toString(2);       // "11010"  (26 en decimal, es 11010 en binario)
console.log((26).toString(2));       // "11010"
(80).toString(8);       // "120"    (80 en decimal, es 120 en octal)
console.log((80).toString(8));       // "120"
(245123).toString(16);  // "3bd83"  (245123 en decimal, es 3bd83 en hexadecimal)
console.log((245123).toString(16));      // "3bd83"
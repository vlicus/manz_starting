// String into an integer: we can use 2 different functions of parsing:

// parseInt() will convert the string into an integer.
let test = 42.3;

Number.parseInt(test); // 42
Number.parseInt("42.3€"); // 42
console.log(Number.parseInt(test, "€")); // 42
Number.parseInt("Num. 42"); // NaN. If starting with a character,
//it will return NaN.
Number.parseInt("A"); // NaN
Number.parseInt(""); // NaN

// parseFloat() will keep the decimal values.
Number.parseFloat("42.5");      // 42.5 (Conserva decimales)
console.log(Number.parseFloat("42.5")); // 42.5
Number.parseFloat("42");        // 42 (El número es entero, convierte a entero)
Number.parseFloat("88.99€");    // 88.99 (Conserva decimales)
Number.parseFloat("42€");       // 42 (El número es entero, convierte a entero)
Number.parseFloat("Núm. 33.5"); // NaN (empieza a descartar en Núm, descarta todo)


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

// Testing the type of the variable wiwth typeof:

console.log(typeof test); // number

test = "Hello";

console.log(typeof test); // string

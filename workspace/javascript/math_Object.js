// Math operations without the need of an external library,
// Math object is included internaly in JavaScript.

// Different constants:

/*

Constante	    --> Descripción	                      --> Valor

Math.E	      --> Número de Euler	                  --> 2.718281828459045
Math.LN2      -->	Equivalente a Math.log(2)	        --> 0.6931471805599453
Math.LN10	    --> Equivalente a Math.log(10)	      --> 2.302585092994046
Math.LOG2E    -->	Equivalente a Math.log2(Math.E)	  --> 1.4426950408889634
Math.LOG10E   -->	Equivalente a Math.log10(Math.E)	--> 0.4342944819032518
Math.PI       --> Número PI o Π                     -->	3.141592653589793
Math.SQRT1_2	-->   Equivalente a Math.sqrt(1/2)    -->	0.7071067811865476
Math.SQRT2    --> Equivalente a Math.sqrt(2)        -->	1.4142135623730951

*/

// Math methods.

Math.abs(-5);                         // Absolute of -5 = 5
console.log(Math.abs(-5));
Math.sign(-5);                        // Sign of -5 (-1 negative, 1 positive) = -1
console.log(Math.sign(-5));
Math.exp(1);                          // e^x --> e^1 (in this case) = 2.718281828459045
console.log(Math.exp(1));
Math.expm1(1);                        // e^x-1 --> e^1-1(in this case) = 1.718281828459045
console.log(Math.expm1(1));
Math.max(1, 50, 30, 30.1, 50.1, 4);   // choose the largest number (50.1)
console.log(Math.max(1, 50, 30, 30.1, 50.1, 4));
Math.min(1, 50, 30, 30.1, 50,1, 4);   // choose the shortest number (1)
console.log(Math.min(1, 50, 30, 30.1, 50,1, 4));
Math.pow(2, 10);                      // base^exp = 2^10 = 1024
console.log(Math.pow(2, 10));
Math.sqrt(2);                         // square root of x (2 in this case) = √x
console.log(Math.sqrt(2));
Math.cbrt(2);                         // cube root of x (2 in this case) = √3x
console.log(Math.cbrt(2));
Math.imul(0xffffffff, 7);             // -7
console.log(Math.imul(0xffffffff, 7));

// Ejemplo de clz32 (count leading zeros)

const x = 1;
"0".repeat(Math.clz32(x)) + x.toString(2);
console.log("0".repeat(Math.clz32(x)) + x.toString(2));
// Devuelve "00000000000000000000000000000001"

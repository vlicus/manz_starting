const number = 2 ** 53;

number.constructor.name;    // "Number" (Es de tipo Number)
console.log(number.constructor.name)

number;       // 9007199254740992
console.log(number);
number + 1;   // 9007199254740992
console.log(number + 1);
number + 5;   // 9007199254740996
console.log(number + 5);
number + 40;  // 9007199254741032
console.log(number + 40);

// La problemática que existe actualmente con el tipo de dato
// Number es que valores más grandes de 253-1 no pueden ser
// representados, ya que superarían el límite seguro
// Number.MAX_SAFE_INTEGER y algunos resultados podrían perder
// precisión, como se puede ver en el siguiente ejemplo:

// That's why we use bigInt number to operatewith large numbers
// correctly.

const number1 = 2n ** 53n;

console.log(number1.constructor.name); // "BigInt" (Es de tipo BigInt)

number1;       // 9007199254740992n
console.log(number1);
number1 + 1n;  // 9007199254740993n
console.log(number1 + 1n);
number1 + 5n;  // 9007199254740997n
console.log(number1 + 5n);
number1 + 40n; // 9007199254741032n
console.log(number1 + 40n);

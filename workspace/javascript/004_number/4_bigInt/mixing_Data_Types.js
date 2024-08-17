// const number = 5 + 5n;          // ERROR: Cannot mix BigInt and other types, use explicit conversions
// console.log(number);
const number1 = BigInt(5) + 5n;   // 10n (Ok, convierte a BigInt y realiza la operación)
console.log(number1);
console.log(number1.constructor.name);
const number2 = 5 + Number(5n);  // 10 (Ok, convierte a Number y realiza la operación)
console.log(number2);
console.log(number2.constructor.name);

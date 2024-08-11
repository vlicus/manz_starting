// Straight notation (preferred)

const number = 24;
const decimal = 15.8;
const legibleNumber = 1_000_000;

console.log(number); // 24
console.log(decimal); // 15.8
console.log(legibleNumber); // 1000000

// Objet notation

const number1 = new Number(24);
const decimal1 = new Number(15.8);
const letter = new Number("A");

console.log(number1); // [Number: 24]
console.log(decimal1); // [Number: 15.8]
console.log(letter); // [Number: NaN]

// Big numbers

const incorrectNumber = 123480231804028034083214;
const bigNumber = 21304302409123409230940923490234n;

// Adding n at the end of the number store the extact value correctly.
console.log(incorrectNumber); // 1.2348023180402804e+26
console.log(bigNumber); // 21304302409123409230940923490234n

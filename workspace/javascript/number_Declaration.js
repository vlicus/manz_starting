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
const letter1 = "A";

console.log(number1); // [Number: 24]
console.log(decimal1); // [Number: 15.8]
console.log(letter); // [Number: NaN] --> A is Not a Number
console.log(letter1); // const is for constant variables, it doesnt care
// about the type of the variable. It will print A but it has to bee declared
// with "" or ''.

// Big numbers

const losingPresitionNumber = 123480231804028034083214;
const bigNumber = 21304302409123409230940923490234n; //BigInt variable type adding n at the end of the number.

// Adding n at the end of the number store the extact value correctly.
console.log(losingPresitionNumber); // 1.2348023180402804e+26
console.log(bigNumber); // 21304302409123409230940923490234n

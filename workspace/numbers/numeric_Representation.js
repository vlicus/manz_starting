// Notación exponencial, number convertion.

let number1 = 11.25,
    number2 = 523.75;

number1.toExponential(0); // "1e+0"
console.log(number1.toExponential(0)); // "1e+0"
number1.toExponential(1);     // "1.3e+0"
console.log(number1.toExponential(1)); // "1.3e+0"
number1.toExponential(2);     // "1.25e+0"
console.log(number1.toExponential(2)); // "1.25e+0"
number1.toExponential(3);     // "1.250e+0"
console.log(number1.toExponential(3)); // "1.250e+0"
number1.toExponential(4);     // "1.2500e+0"
console.log(number1.toExponential(4)); // "1.2500e+0"

// Notación punto fijo
number1.toFixed(0);           // "1"
console.log(number1.toFixed(0)); // "1"
number1.toFixed(1);           // "1.3"
console.log(number1.toFixed(1)); // "1.3"
number1.toFixed(2);           // "1.25"
console.log(number1.toFixed(2)); // "1.25"
number1.toFixed(3);           // "1.250"
console.log(number1.toFixed(3)); // "1.250"

// Cambiando precisión
// number2.toPrecision(0); Will not work, toPrecision()
// must have a value greater than 0.
number2.toPrecision(1);      // "5e+2"
console.log(number2.toPrecision(1)); // "5e+2"
number2.toPrecision(2);      // "5.2e+2"
console.log(number2.toPrecision(2)); // "5.2e+2"
number2.toPrecision(3);      // "524"
console.log(number2.toPrecision(3)); // "524"
number2.toPrecision(4);      // "523.8"
console.log(number2.toPrecision(4)); // "523.8"
number2.toPrecision(5);      // "523.75"
console.log(number2.toPrecision(5)); // "523.75"

// IN ALL CASES, THE NUMBER IS CONVERTED TO A STRING  (NOT A NUMBER)


// Comparing the same value represented in different ways.
let a = 1.3e+0;
let b = 1.3;

if (a === b) {
    console.log("a and b are equal");  // This will be printed
      // because the values are the same, even though they are
      // represented differently.
}
    else {
        console.log("tu puta madre");
    }

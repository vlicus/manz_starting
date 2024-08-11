// Test if a variable (number) is NaN:

let number = 0;

// This is the most reliable way to check if a variable is NaN:
// This is necessary because in JavaScript, most values
// are converted into a string, therefore, this NaN error can be found
// frequently.

Number.isNaN(number); // true or false
console.log(Number.isNaN(number)); // true

let number2 = 523.75;
number2.toPrecision(1);      // "5e+2"
console.log(number2.toPrecision(1)); // "5e+2"

console.log(typeof number2); // number

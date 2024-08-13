// Set default value for multiple parameters (length = 10)

function multiplicationTable (number, length = 10) {
  for(let i = 0; i <= length; i++){
    console.log(number, "x", i, "=", i * number);
  }
}

multiplicationTable(2); // Will print the multiplication table of 2 up to 10.
multiplicationTable(3, 15); // Will print the multiplication table of 3 up to 15.

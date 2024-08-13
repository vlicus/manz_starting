function multiplicationTable (number, length) {
  for(let i = 0; i <= length; i++) {
    console.log(number, "x", i, "=", i * number);
  }
}

multiplicationTable(2, 10); // Will print the multiplication table of 2 up to 10.
multiplicationTable(3, 5); // Will print the multiplication table of 3 up to 5.

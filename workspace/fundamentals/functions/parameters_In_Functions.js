function tableOfOne(upTo) {
  for(let i = 0; i <= upTo; i++) {
    console.log("1 x", i, "=", i * 1);
  }
}

tableOfOne(10); // Will print the multiplication table of one up to 10.
tableOfOne(5); // Will print the multiplication table of one up to 5.

// tableOfOne is the name of the function and it will print the multiplication table of one up to the number passed as an argument.
// The function is called twice. first with 10 as an argument and then with 5 as an argument.

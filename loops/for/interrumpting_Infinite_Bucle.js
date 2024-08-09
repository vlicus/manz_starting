// Be aware of infinite bucles

/*

let i = 0;

while (i < 11) {
  if (i == 5) {
    i++; // Incrementing the variable will continue the loop until its satisfied
    continue; // Without the increment (i++), it is an
    //infinite bucle, it will never stop incrementing from 5
  }
  console.log("Number itinerated:", i);
  i = i + 1;
}

console.log("Bucle ended.");

*/

// Break we can interrupt the bucle and skip the value 5

/*

for (let i = 0; i < 11; i++) {
  if (i == 5) {
    break;
  }
  console.log("Value of i:", i);
}

console.log("Bucle ended.");

*/

let i = 0

while (i < 11) {
  if (i === 5) { // Comparing the value of i to 5
    break // Breaking the bucle

    /*
      Removing break and adding the following code will continue
      the itineration until the while condition is satisfied:
      i++;
      continue;
    */
  }
  console.log('Iteration number: ', i)
  i = i + 1
}

console.log('Bucle ended.')

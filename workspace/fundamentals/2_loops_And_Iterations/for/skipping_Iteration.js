//3 ways of skipping an iteration

/*

for (let i = 0; i < 11; i++) {
  if (i == 5) {
    continue;
  }

  console.log("Value of i:", i);
}

*/

// It can be done without the use of continue like the following:

/*

for (let i = 0; i < 11; i++) {
  if (i != 5) { //if i not equal to 5 it keeps printing i value
    console.log("Value of i:", i);
  }
}

*/

// Dividing for loop in two, skipping the desired value (5 in this case)
let i = 0

for (i = 0; i < 5; i++) {
  console.log("Value of i:", i);
}

for (i = 6; i < 11; i++) {
  console.log("Value of i:", i);
}

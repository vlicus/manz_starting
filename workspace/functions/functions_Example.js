//Multiplication table (1)


/*

//10 lines of code, waste of time and resources.

console.log("1 x 0 =", 1 * 0);
console.log("1 x 1 =", 1 * 1);
console.log("1 x 2 =", 1 * 2);
console.log("1 x 3 =", 1 * 3);
console.log("1 x 4 =", 1 * 4);
console.log("1 x 5 =", 1 * 5);
console.log("1 x 6 =", 1 * 6);
console.log("1 x 7 =", 1 * 7);
console.log("1 x 8 =", 1 * 8);
console.log("1 x 9 =", 1 * 9);
console.log("1 x 10 =", 1 * 10);

*/

/*

// The code repeat itself 10 times (harder and uglier)
for(let i = 0; i <= 10; i++){
  console.log("1 x", i, "=", i * 1);
}

*/

//Use of function to avoid repetition
function tableOfOne(){
  for (let i = 0; i <= 10; i++) {
    console.log("1 x", i, "=", i * 1);
  }
}

let intento;
//Bucle that calls tableOfOne function 3 times:
for(intento = 0; intento < 3; intento++) tableOfOne();

console.log("It will be called the function once more: ")
//Call the function once:
tableOfOne();

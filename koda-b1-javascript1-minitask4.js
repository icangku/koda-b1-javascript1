/**
 * Write a program fizzbuzz
 */
function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}
/**
 * Write a program to check if a number is even or odd
 */
function evenOdd() {
  let j = 1;
  while (j < 100) {
    if (j % 2 === 0) {
      console.log(`${j} is even`);
    } else {
      console.log(`${j} is odd`);
    }
    j++;
  }
}

/**
 * Write a program to print the multiplication of 1 to 10
 */
function multiplication() {
  let k = 0;
  do {
    console.log(`Multiplication of 1 x ${k} is ${1 * k}`);
    k++;
  } while (k <= 10);
}

let mode = "multiplication";

switch (mode) {
  case "fizzbuzz":
    fizzBuzz();
    break;
  case "evenodd":
    evenOdd();
    break;
  case "multiplication":
    multiplication();
    break;
  default:
    console.log("Invalid mode");
}

const prompt = require('prompt-sync')();

const NUMBER = parseInt(prompt('Enter a number: '));
let factorial = 1;

//calculate factorial of number
for (i = 2; i <= NUMBER; i++) {
    factorial = factorial * i;
}
console.log("Factorial of the " + NUMBER + " is : " + factorial);
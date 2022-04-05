const prompt = require('prompt-sync')();

const number = prompt('Enter number: ');

let count = 0;
for (let i = 1; i <= number; i++)
    //condition for getting factors
    {
        if (number % i == 0)                                     
        count = count + 1;
    }
    //if condition for checking number of factors
    if (count == 2)                                            
    {
        console.log(number + " is a prime number");

    }
    else
    {
        console.log(number + " is not a prime number");
    }
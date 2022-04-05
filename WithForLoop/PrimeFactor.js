const prompt = require('prompt-sync')();

let num = prompt('Enter number: ');
for (let i=1; i<=num; i++)
  {
    if (num % i == 0)
        {
            console.log(i + " is a prime factor of " + num);
        }
 }
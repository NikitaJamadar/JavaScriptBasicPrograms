const prompt = require('prompt-sync')();

const NUMBER = prompt('Enter a number: ');
 
if ( NUMBER == 1 ) 
{
    console.log("Unit");
}
else if ( NUMBER == 10 ) 
{
    console.log("Ten");
}
else if ( NUMBER == 100 ) 
{
    console.log("Hundred");
}
else if ( NUMBER == 1000 ) 
{
    console.log("Thousand");
}
else if ( NUMBER == 10000 ) 
{
    console.log("Ten thousand");
}
else if ( NUMBER == 100000 ) 
{
    console.log("Lakh");
}
else 
{
    console.log("Invalid input!");
}
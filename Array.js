//1.a Generate 10 random 3 digit number

let numbers = [];
for(let i =0 ;i<10; i++)
{
    numbers[i] = Math.floor(Math.random()*1000);
}
numbers.forEach(p => console.log(p));
let temp = 0;
for(let j = 0; j<10; j++)
{
    for(let i =0;i<10-j;i++)
    {
        if(numbers[i]<numbers[i+1])
        {
            temp = numbers[i];
            numbers[i] = numbers[i+1];
            numbers[i+1] = temp;
        }
    }
}

// Second largest and second smallest without sorting
console.log("second maximum number is : "+numbers[1]+" second min number is "+numbers[numbers.length-2]);

//2. Second largest and second smallest with sorting
console.log("Second largest element is: "+GetSecondLargest(numbers));
console.log("Second minimun number is "+GetSecondMinimum(numbers));
function GetSecondLargest(arr)
{
    arr.sort(function(a,b){return a-b}); 
           return arr[arr.length-2];  
} 
function GetSecondMinimum(arr)
 {
    arr.sort(function(a,b){return a-b});
           return arr[1];  
 }  

  // Find digit that are repeated twice like 11,22.
  console.log("Numbers with same digits are : ")
for(let i = 1; i<100;i++)
{
    let ones = i%10;
    let tens = (i - ones)/10;
    if(ones == tens)
    console.log(i);
}
    
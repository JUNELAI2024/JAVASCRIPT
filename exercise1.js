// hello.js 
console.log('Hello World!')
//Declare constant
const MAX = '57'

//Declare variable 
let actual;
actual = MAX -13;
let percentage;
percentage = actual/MAX;
// Round the percentage to two decimal places
let roundedPercentage = percentage.toFixed(2); // No need to multiply by 100 for this case

// Log the output to the console
console.log('The percentage is ${roundedPercentage}');

//EXERCISE1
function lastLetter(str) {
    return str[str.length - 1]; 
}

// Return output
console.log(lastLetter("helloworld")); 


//EXERCISE2
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); // Capitalize first letter and lowercase the rest
}

// Return output with example
const result = capitalize("helLOWorLD");
console.log(result); 

// hello.js 
//console.log('Hello World!')
//Declare constant
//const MAX = '57'

//Declare variable 
//let actual;
//actual = MAX -13;
//let percentage;
//percentage = actual/MAX;
// Round the percentage to two decimal places
//let roundedPercentage = percentage.toFixed(2); // No need to multiply by 100 for this case

// Log the output to the console
//console.log('The percentage is ${roundedPercentage}');
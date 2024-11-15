// Function to add 7 
//function add7(number) {
//    return number + 7;
//}

// Example usage of add7
//const result = add7(5); 
//console.log(result); // Outputs

// Display the result in the HTML
//document.getElementById("result").textContent = `The result is: ${result}`;

// Function to multiply two numbers
//function multiply(num1, num2) {
  //  return num1 * num2;
//}

// 2 numbers usage of multiply
//const product = multiply(5, 3); // You can change the input numbers here
//console.log(product); // Outputs the result to the console

// Display the result in the HTML
//document.getElementById("result").textContent = `The product is: ${product}`;

// Function to check office hours
function checkOfficeHour(hour, isWeekend) {
    if (hour > 10 && hour < 18 && !isWeekend) {
        console.log('The office is opened.');
        document.getElementById("result").textContent = 'The office is opened.';
    } else {
        console.log('The office is closed.');
        document.getElementById("result").textContent = 'The office is closed.';
    }
}

// Example to apply hour and isweekend value usage
let hour = 9;         
let isWeekend = true; 
checkOfficeHour(hour, isWeekend);
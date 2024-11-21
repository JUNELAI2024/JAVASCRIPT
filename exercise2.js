//Exercise2
const users = ["John", "William", "David", "Jenny", "Hannah"];


const userList = `User list: ${users.join(', ')}`;

// Print the result to the console
console.log(userList);



const users = ["John", "William", "David", "Jenny", "Hannah"];

// Get the total number of users
const totalUsers = users.length;

// Print the output
console.log(`There are ${totalUsers} users on the list.`);


const users = ["Hannah", "William", "David", "Jenny", "John"];
const userList = `User list: ${users.join(', ')}`;

// Print the result to the console
console.log(userList);



const users = ["Hannah", "William", "David", "Jenny", "John"];
// Get the total number of users
const totalUsers = users.length;

// Print the output
console.log(`There are ${totalUsers} users on the list.`);



const users = ["Hannah", "William", "David", "Jenny", "John", "Finn"];
const userList = `User list: ${users.join(', ')}`;

// Print the result to the console
console.log(userList);

const users = ["Hannah", "William", "David", "Jenny", "John", "Finn"];
// Get the total number of users
const totalUsers = users.length;

// Print the output
console.log(`There are ${totalUsers} users on the list.`);



const select = document.querySelector("select")
const para = document.querySelector("p")
select.addEventListener("change", setWeather)
function setWeather() {
const choice = select.value
// Write the solution between these lines
switch (choice) {
    case "sunny":
        para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
        break;
    case "rainy":
        para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
        break;
    case "snowing":
        para.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
        break;
    case "overcast":
        para.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
        break;
    default:
        para.textContent = ""; 
}
// =================================
// =================================
}
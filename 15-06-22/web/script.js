const drivingAge = 16;

const canDrive = (userAge) => {

    return userAge < drivingAge ? "Sorry, you can't drive yet" : "Drive away!";
}

console.log(canDrive(17));
console.log(canDrive(15));

const translator = (language) => {
    let result = "";
    switch(language){
        case "en":
            result = "Hello World";
            break;
        case "fr":
            result = "Bonjour le monde";
            break;
        default:
            result = "???";
            break;
    }

    return result;
}

console.log(translator("en"));
console.log(translator("fr"));
console.log(translator("ch"));

const maxAge = 100;

const calculateSupply = (age, amount) => {

    let years = maxAge - age;
    let total = years * 365 * amount
    return `You will need ${total} to last you to the ripe old age of ${maxAge}`;
}

console.log(calculateSupply(39, 5));
console.log(calculateSupply(99, 1));

const calcCircumference = (radius) =>{
    let value = 2 * Math.PI * radius;
    return `"The circumference is ${value}"`
}

console.log(calcCircumference(1));

const calcArea = (radius) =>{
    let value = Math.PI * (radius * radius);
    return `"The area is ${value}"`
}

console.log(calcArea(4));

const convert = 1.8;

const celsiusToFahrenheit = (temp) =>{
    let value = temp * convert + 32;
    return `"${temp}°C is ${value}°F"`
}

console.log(celsiusToFahrenheit(0));

const fahrenheitToCelsius = (temp) =>{
    let value = (temp - 32) / convert;
    return `"${temp}°F is ${value}°C"`
}

console.log(fahrenheitToCelsius(100));

// Create a function that receives an ID (index), an email and a password.
// If the function was provided with an email and a password that matches up,
// log "You are logged in". Otherwise, log "Sorry, something went wrong".

const users = [
    {
      email: "groucho@ga.co",
      password: "chicken",
      isAdmin: true
    },
    {
      email: "harpo@ga.co",
      password: "elephant",
      isAdmin: false
    },
    {
      email: "gummo@ga.co",
      password: "pinkFairyArmadillo",
      isAdmin: true
    },
    {
      email: "zeppo@ga.co",
      password: "dumboOctopus",
      isAdmin: false
    }
  ];
// myArray.find(item => item.id === 2);

const login = (email, password, id = 0) => {
    let currentUser = users.find(item => item.email === email);
    if (password === currentUser.password){
        return "You are logged in!"
    }
    return "Sorry something went wrong"
}

console.log(login("zeppo@ga.co", "dumboOctopus"))

const createAccount = (email, password, admin) => {
    users.push({email, password, admin})
}

createAccount("chico@gmail.com", "redLippedBatfish", false)

console.log(users);

const deleteAccount = (email) => {
    let userToDelete = users.find(item => item.email === email);
    let myIndex = users.indexOf(userToDelete);
    users.splice(myIndex, 1);
}

// deleteAccount("harpo@ga.co")

console.log(users);

const updateAccount = (email, oldPassword, newPassword) => {
    let userToUpdate = users.find(item => item.email === email);
    let myIndex = users.indexOf(userToUpdate);
    console.log(userToUpdate);
    if(userToUpdate.password === oldPassword){
        users[myIndex].password = newPassword;
    } else{
        console.log("Error");
    }
}

updateAccount("harpo@ga.co", "elephant", "ayeAye");

console.log(users);

const searchUsers = (email) => {
    let userSearch = users.find(item => item.email === email);
    if(userSearch != null){
        console.log("Found");
        return userSearch
    } else{
        console.log("Not Found");
    }
}

searchUsers("harpo@ga.co");
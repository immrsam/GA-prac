const user = {
    name: "Bud",
    age: 19,
    email: "test@email.com",
    password: "password123",
    isAdmin: false,
    loggedin: false
}

let message = "";
const enteredEmail = "test@email.com";
const enteredPassword = "password123";
const messageDisplay = document.createElement("p");
document.body.appendChild(messageDisplay);

function login(){
    if(!user.loggedin){
        if(user.email === enteredEmail && user.password === enteredPassword){
            message = `G'day ${user.name}, how are you?`;
        } else{
            message = `incorrect email or password`;
        }
        user.loggedin = true;
    } else{
        message = `Sorry ${user.name} you are already logged in!`;
    }

    messageDisplay.innerHTML = message;
}

function logout(){
    if(user.loggedin){
        message = `Logging you out ${user.name}!`
        user.loggedin = false;
    } else{
        message = `??? no one is logged in anyway!`
    }

    messageDisplay.innerHTML = message;
}

// let numOne = 1;
// let numTwo = 2;

// if(numOne > numTwo){
//     console.log(`"numOne ${numOne} is bigger than numTwo ${numTwo}"`);
// }else if (numOne < numTwo){
//     console.log(`"numOne ${numOne} is smaller than numTwo ${numTwo}"`);
// } else{
//     console.log(`"numOne ${numOne} is equal to numTwo ${numTwo}"`);
// }

// let latitude = -65.3966675;

// if(latitude > 0){
//     console.log(`"${latitude} is Southern Hemisphere"`);
// }else if (latitude < 0){
//     console.log(`"${latitude} is Northern Hemisphere"`);
// } else{
//     console.log(`"${latitude} is on the equator"`);
// }

// let year = 2000;
// // year = prompt("enter a year");

// if(year > 1800 && year <= 1900){
//     console.log(`"${year} is 19th Century"`);
// } else if(year > 1900 && year <= 2000){
//     console.log(`"${year} is 20th Century"`);
// } else if(year > 2000 && year <= 2100){
//     console.log(`"${year} is 21st Century"`);
// } else {
//     console.log(`"Please enter a different year between 1800 & 2100"`);
// }

// let hour = 1;
// // hour = prompt("Please enter an hour");

// if(hour >= 0 && hour < 24){
//     if(hour < 10){
//         console.log(`"Good Morning"`);
//     }else if(hour < 19){
//         console.log(`"Good Day"`);
//     }else {
//         console.log(`"Good Evening"`);
//     }
// } else{
//     console.log(`"Hour must be between 0 and 23"`);
// }

// // FizzBuzz
// for(let count = 0; count <= 100; count++){
//     if(count % 3 === 0 && count % 5 === 0){
//         if(count > 0){
//             console.log(`${count} FizzBuzz`);
//         }
//     } else{
//         if(count % 3 === 0){
//             console.log(`${count} Fizz`);
//         }
//         if(count % 5 === 0){
//             console.log(`${count} Buzz`);
//         }
//     }
// }

// // Timestable
// let loop = false;
// let timesTable = 2;
// while(!loop){
//     timesTable = prompt("Enter a number 9 or less");

//     if(timesTable > 0 && timesTable <= 9){
//         console.log(`"${timesTable} x Table"`);
//         for(let i = 1; i <= 12; i++){
//             console.log(`"${i} x ${timesTable} = ${i*timesTable}"`);
//         }
//         loop = true;
//     } else{
//         console.log(`"Number should be between 1 and 9"`);
//     }
// }

let rainbowColours = [];

// push to end of array
rainbowColours.push("orange");
// insert into the start of the array
rainbowColours.unshift("red");
// push to end of array
rainbowColours.push("yellow");
// push multiple items to end of array in the order entered
rainbowColours.push("green", "blue", "indigo", "violet");
console.log(rainbowColours);
console.log(`length of rainbowColours is ${rainbowColours.length}`);
console.log(rainbowColours[1]);
console.log(`last item in rainbowColours is ${rainbowColours[rainbowColours.length - 1]}`);
console.log(`index of "blue" is ${rainbowColours.indexOf("blue")}`);
// creates new array of items start 1 and end 3.
// the end stops collecting and doesnt include that item.
// items 1 & 2 are collected into a new array, not 3
console.log(`slice 1 and 3 is ${rainbowColours.slice(1,3)}`);
// removes items 1, 2 & 3
console.log(`splice 1 and 3 is ${rainbowColours.splice(1,3)}`);
console.log(rainbowColours);

let twoColors = rainbowColours.slice(1,3);
console.log(twoColors);

const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
console.log(nums);
nums.splice(3,3);

console.log(nums);

const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[arrOfArrs.length - 1][arrOfArrs[arrOfArrs.length - 1].length - 1]);

for (let i = 0; i < arrOfArrs[arrOfArrs.length - 1].length; i++){
    console.log(arrOfArrs[1][i]);
}
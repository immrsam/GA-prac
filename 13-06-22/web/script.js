// const rainbowColours = [];

// // push to end of array
// rainbowColours.push("orange");
// // insert into the start of the array
// rainbowColours.unshift("red");
// // push to end of array
// rainbowColours.push("yellow");
// // push multiple items to end of array in the order entered
// rainbowColours.push("green", "blue", "indigo", "violet");
// console.log(rainbowColours);
// console.log(`length of rainbowColours is ${rainbowColours.length}`);
// console.log(rainbowColours[1]);
// console.log(`last item in rainbowColours is ${rainbowColours[rainbowColours.length - 1]}`);
// console.log(`index of "blue" is ${rainbowColours.indexOf("blue")}`);
// // creates new array of items start 1 and end 3.
// // the end stops collecting and doesnt include that item.
// // items 1 & 2 are collected into a new array, not 3
// console.log(`slice 1 and 3 is ${rainbowColours.slice(1,3)}`);
// // removes items 1, 2 & 3
// console.log(`splice 1 and 3 is ${rainbowColours.splice(1,3)}`);
// console.log(rainbowColours);

// const twoColors = rainbowColours.slice(1,3);
// console.log(twoColors);

// const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
// console.log(nums);
// nums.splice(3,3);
// console.log(nums);

// const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

// console.log(arrOfArrs[0][0]);
// console.log(arrOfArrs[arrOfArrs.length - 1][arrOfArrs[arrOfArrs.length - 1].length - 1]);

// for (let i = 0; i < arrOfArrs[arrOfArrs.length - 1].length; i++){
//     console.log(arrOfArrs[1][i]);
// }

// const topFive = ["Bender", "Fry", "Zoidburg", "Professor", "Zapp Brannigan"];

// for (let i = 0; i < topFive.length; i++){
//     let prefix = '';
//     switch (i){
//         case 0:
//             prefix = 'st';
//             break;
//         case 1:
//             prefix = 'nd';
//             break;
//         case 2:
//             prefix = 'rd';
//             break;
//         default:
//             prefix = 'th';
//             break;
//     }
//     console.log(`my ${i + 1}${prefix} choice is ${topFive[i]}!`);
// }

// let count = 0;

// topFive.forEach((item) => {
//     let prefix = '';
//     switch (count){
//         case 0:
//             prefix = 'st';
//             break;
//         case 1:
//             prefix = 'nd';
//             break;
//         case 2:
//             prefix = 'rd';
//             break;
//         default:
//             prefix = 'th';
//             break;
//     }
//     count++;
//     console.log(`my ${count}${prefix} choice is ${item}!`);
// });

// topFive.map(e => console.log(e));

// console.log(topFive.includes("Bender"));

// const numArr = [1, 5, 9, 11, 12];
// const bigNum = numArr.find(n => n > 11);
// console.log(bigNum);

const arrOfBooks = [
    {
        title: "Book One",
        author: "Person McPerson",
        alreadyRead: false
    },
    {
        title: "Book Two",
        author: "This Guy",
        alreadyRead: true
    },
    {
        title: "Book Three",
        author: "I P Freely",
        alreadyRead: false
    },
    {
        title: "Book Four",
        author: "Another Author",
        alreadyRead: true
    }
];

console.log(arrOfBooks);

arrOfBooks.forEach((e) => {
    if(e.alreadyRead){
        console.log(e);
    }
})

const gingerAppleBananaSmoothie = {
    title: "Ginger, Apple and Banana Smoothie",
    serves: 2,
    ingredients: [
        "500ml Milk",
        "2/3 cups of vanilla protein powder",
        "2 tbs rolled oats",
        "Pinch of cinnamon",
        "2 cups of baby spinach leaves",
        "2 frozen bananas",
        "2 roughly chopped apples",
        "1/2 avocado",
        "2 tsp fresh ginger",
        "6 ice cubes"
    ]
}

console.log(gingerAppleBananaSmoothie);

const container = document.getElementById('container');

const recepieHeading = document.createElement('h2');
const recepieServes = document.createElement('h3');
const recepieIngredients = document.createElement('div');
const recepieIngredientsHead = document.createElement('p');
const recepieIngredientsList = document.createElement('ul');

recepieHeading.innerText = gingerAppleBananaSmoothie.title;
recepieServes.innerText = `Serves: ${gingerAppleBananaSmoothie.serves}`;
recepieIngredientsHead.innerText = `Ingredients: `;

gingerAppleBananaSmoothie.ingredients.forEach((e) => {
    let li = document.createElement('li');
    li.innerHTML = `- ${e}`;
    recepieIngredientsList.appendChild(li);
});

recepieIngredients.appendChild(recepieIngredientsHead);
recepieIngredients.appendChild(recepieIngredientsList);

container.appendChild(recepieHeading);
container.appendChild(recepieServes);
container.appendChild(recepieIngredients);
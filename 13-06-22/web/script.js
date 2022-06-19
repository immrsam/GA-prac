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

// const topFiveColour = ["Blue", "Red", "Orange", "Green", "Yellow"];

// topFiveColour.forEach(item => {
//     let prefix = '';
//     let position = topFiveColour.indexOf(item) + 1;

//     switch (position){
//         case 1:
//             prefix = 'st';
//             break;
//         case 2:
//             prefix = 'nd';
//             break;
//         case 3:
//             prefix = 'rd';
//             break;
//         default:
//             prefix = 'th';
//             break;
//     }
//     console.log(`My ${position}${prefix} choice is ${item}`);
// })

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
console.log("------------------");
arrOfBooks.map((b) => console.log(b.title));
arrOfBooks.forEach((b) => console.log(b.title));
console.log("------------------");

// console.log(arrOfBooks);

for(let i = 0; i < arrOfBooks.length; i++){
    if(arrOfBooks[i].alreadyRead){
        console.log(`You have read "${arrOfBooks[i].title}" by ${arrOfBooks[i].author}`);
    } else {
        console.log(`You still need to read "${arrOfBooks[i].title}" by ${arrOfBooks[i].author}`);
    }
}

arrOfBooks.forEach((e) => {
    if(e.alreadyRead){
        console.log(`You have read "${e.title}" by ${e.author}`);
    } else {
        console.log(`You still need to read "${e.title}" by ${e.author}`);
    }
});

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

console.log(gingerAppleBananaSmoothie.title);
console.log(`Serves: ${gingerAppleBananaSmoothie.serves}`);
console.log(`Ingredients:`);
gingerAppleBananaSmoothie.ingredients.forEach((e) => console.log(`- ${e}`))



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


function videoPairs() {
	let newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	],
	videoAndTitlePairs = [];

	// ------------ INSERT CODE HERE! -----------------------------------
	// Use forEach function to accumulate {id, title} pairs from each video.
	// Put the results into the videoAndTitlePairs array using the Array's
	// push() method. Example: videoAndTitlePairs.push(newItem);
	// ------------ INSERT CODE HERE! -----------------------------------
    newReleases.forEach((e) => videoAndTitlePairs.push({id: e.id, title: e.title}));
    // newReleases.forEach((e) => console.log(e.id));
    // newReleases.forEach(function(video) {
    //     videoAndTitlePairs.push({ id: video.id, title: video.title });
    // });

	return videoAndTitlePairs;
}

console.log(videoPairs());

Array.prototype.map = function(projectionFunction) {
	let results = [];
	this.forEach(function(itemInArray) {
        results.push(projectionFunction(itemInArray));


		// ------------ INSERT CODE HERE! ----------------------------
		// Apply the projectionFunction to each item in the array and add
		// each result to the results array.
		// Note: you can add items to an array with the push() method.
		// ------------ INSERT CODE HERE! ----------------------------
    });

	return results;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'


// Array.prototype.map = function(projectionFunction) {
// 	var results = [];
// 	this.forEach(function(itemInArray) {
// 		results.push(projectionFunction(itemInArray));

// 	});

// 	return results;
// };

// // JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'

function newReleaseMap() {
	var newReleases = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		];

  return newReleases.map(
    function(video)
    {
        return { id: video.id, title: video.title };
    });
}


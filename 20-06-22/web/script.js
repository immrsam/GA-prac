// const container = document.getElementById("container");

// // Scope, closures

// // `Scope` is the set of variables, objects, and functions you have access to.

// // JavaScript has two scopes: `global` and `local`. A variable that is declared outside a function definition is a
// // `global` variable, and its value is accessible and modifiable throughout your program. A variable that is declared
// // inside a function definition is `local`. It is created and destroyed every time the function is executed, and it
// // cannot be accessed by any code outside the function.

// // Functions defined inside other functions, known as nested functions or closures, have access to their parent function's scope.

// // Pay attention to the comments in the code below.
// // Before running the code think what would be the output of `foo()`

// const aa = 4 // a is a global variable, it can be accessed by the functions below

// function foo () {
//   const bb = aa * 3 // b cannot be accessed outside foo function, but can be accessed by functions
//   // defined inside foo
//   function bar (cc) {
//     const bb = 2 // another `b` variable is created inside bar function scope
//     // the changes to this new `b` variable don't affect the old `b` variable
//     console.log(aa, bb, cc)
//   }

//   bar(bb * 4)
// }

// foo()

// // I.I.F.E., Immediately Invoked Function Expression, is a common pattern for creating local scopes.

// // Example:
// //
// // (function () { // the function expression is surrounded by parenthesis
// //   // variables defined here
// //   // can't be accessed outside
// // })() // the function is immediately invoked
// //

// // a: 1, b: 8, c: 6
// const a = 1;
// const b = 2;
// const c = 3;

// (function firstFunction () {
//   const b = 5;
//   const c = 6;

//   (function secondFunction () {
//     const b = 8;
//     console.log(`a: ${a}, b: ${b}, c: ${c}`);

//     (function thirdFunction () {
//       const a = 7;
//       const c = 9;

//       (function fourthFunction () {
//         const a = 1;
//         const c = 8;
//       })()
//     })()
//   })()
// })()

// // callbacks

// const myCallBack = (name) => {
//   console.log(name);
// }

// const processInput = (ourCallback) => {
//   let name = "Callback";
//   ourCallback(name);
// }
// processInput(myCallBack);

// // setTimeout(console.log("T"), 5000);
// // setTimeout(function(){
// //   processInput(myCallBack)
// //   }, 5000);

// // setInterval(function () {
// //   console.log("Tick");
// // }, 1000);

// // function createGame() {
// //   let score = 0;
// //   return function increaseScore() {
// //     score += 1;
// //     console.log(score);
// //     return score;
// //   }

// // }

// // let scoreGoal  = createGame();
// // scoreGoal();
// // scoreGoal();
// // scoreGoal  = createGame();
// // scoreGoal();

// function createGame() {
//   let score = 0;

//   return {
//     addScore: function() {
//     score += 1;
//     },
//     reduceScore: function() {
//       score -= 1;
//     },
//     printScore: function() {
//       console.log(score);
//     }
//   };
// }

// let player = createGame();

// player.printScore();
// player.addScore();
// player.addScore();
// player.printScore();
// player.reduceScore();
// player.printScore();
// player.addScore();
// console.log(player.score = 1);
// player.printScore();



// const localVariable = "Global";

// if(true){
//   let localVariable = "Local";
//   console.log(localVariable);
// }

// console.log(localVariable);

// // function createNewGame(){
// //   let score = 0;
// //   return function scoreGoal(){
// //     score += 1;
// //     return score;
// //   };
// // }

// // let newGame = createNewGame();
// // newGame();
// // console.log(newGame);

// const fatArrow = () => {

// }

// const constFunction = function () {

// }
///////////////////////////////////////////////////////////////
const majority = function(arr, myIsOdd){
  let result = false;
  let even = 0;
  let odd = 0;
  arr.forEach(item => {
    if(myIsOdd(item)){
      odd ++;
    } else{
      even ++;
    }
  })

  if (odd > even){
    result = true;
  }

  return result;
}

const isOdd = function(num){
  let result = true;
  if(num % 2 === 0){
    result = false
  }
  return result;
}

console.log(isOdd(1))

console.log(majority([1, 2, 3, 4, 5, 7, 9, 11], isOdd));
// will return true

console.log(majority([2, 3, 4, 5], isOdd));
// will return false
///////////////////////////////////////////////////////////////
const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};

const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};

const goodKeys = function (obj, callback) {
  let result = [];

  for (let item in obj){
    // console.log(`${Object.keys(obj)}`);

    if(callback(obj[item])){
      result.push(item)
    }
  }

  return result;
}

console.log(goodKeys(sunny, startsWithBird));
// should return ['charlie', 'dee']
///////////////////////////////////////////////////////////////

const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;

const half = (n) => n / 2;

const objFilter = function(obj, callback){
  let newObj = {};
  for (let item in obj){
    // console.log(obj[item]);

    if(callback(item) === obj[item]){
      // console.log(`${item} ${obj[item]}`);
      newObj[item] = obj[item];
    }
  }
  return newObj;
}

console.log(objFilter(startingObj, half));

///////////////////////////////////////////////////////////////

const callTimes = function(){
  let timesCalled = 1;
  return function(){
    return (timesCalled ++)
  }
}

// function callTimes() {}
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();

console.log(myNewFunc1()); // => 1
console.log(myNewFunc1()); // => 2
console.log(myNewFunc2()); // => 1
console.log(myNewFunc2()); // => 2

///////////////////////////////////////////////////////////////

const russianRoulette = function(n){
  let currentRound = 0;
  let gameOver = false;

  return function(){
      while(!gameOver){
      if(currentRound < n - 1){
        currentRound++;
        return "Click";
      }
      else{
        gameOver = true;
        return "Bang";
      }
    }
    return "Reload to play again"
  };

}

// function russianRoulette() {}
const play = russianRoulette(3);

console.log(play());
// => should log 'click'
console.log(play());
// => should log 'click'
console.log(play());
// => should log 'bang'
console.log(play());
// => should log 'reload to play again'
console.log(play());
// => should log 'reload to play again'

///////////////////////////////////////////////////////////////


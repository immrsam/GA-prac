const container = document.getElementById("container");

// Scope, closures

// `Scope` is the set of variables, objects, and functions you have access to.

// JavaScript has two scopes: `global` and `local`. A variable that is declared outside a function definition is a
// `global` variable, and its value is accessible and modifiable throughout your program. A variable that is declared
// inside a function definition is `local`. It is created and destroyed every time the function is executed, and it
// cannot be accessed by any code outside the function.

// Functions defined inside other functions, known as nested functions or closures, have access to their parent function's scope.

// Pay attention to the comments in the code below.
// Before running the code think what would be the output of `foo()`

const aa = 4 // a is a global variable, it can be accessed by the functions below

function foo () {
  const bb = aa * 3 // b cannot be accessed outside foo function, but can be accessed by functions
  // defined inside foo
  function bar (cc) {
    const bb = 2 // another `b` variable is created inside bar function scope
    // the changes to this new `b` variable don't affect the old `b` variable
    console.log(aa, bb, cc)
  }

  bar(bb * 4)
}

foo()

// I.I.F.E., Immediately Invoked Function Expression, is a common pattern for creating local scopes.

// Example:
//
// (function () { // the function expression is surrounded by parenthesis
//   // variables defined here
//   // can't be accessed outside
// })() // the function is immediately invoked
//

// a: 1, b: 8, c: 6
const a = 1;
const b = 2;
const c = 3;

(function firstFunction () {
  const b = 5;
  const c = 6;

  (function secondFunction () {
    const b = 8;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);

    (function thirdFunction () {
      const a = 7;
      const c = 9;

      (function fourthFunction () {
        const a = 1;
        const c = 8;
      })()
    })()
  })()
})()

